import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

export type VoiceAssistantStatus = "idle" | "listening" | "speaking" | "unsupported" | "denied";

export interface VoiceAssistantRenderProps {
  status: VoiceAssistantStatus;
  statusLabel: string;
  transcript: string;
  response: string;
  error: string;
  isSpeechSupported: boolean;
  isListening: boolean;
  startListening: () => Promise<void>;
  stopListening: () => void;
  toggleListening: () => Promise<void>;
}

interface VoiceAssistantProps {
  children: (props: VoiceAssistantRenderProps) => ReactNode;
}

const DEFAULT_RESPONSE = "Tap start and ask about the portfolio, a project, or who Soundar is.";

export function VoiceAssistant({ children }: VoiceAssistantProps) {
  const [status, setStatus] = useState<VoiceAssistantStatus>("idle");
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState(DEFAULT_RESPONSE);
  const [error, setError] = useState("");
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);

  const recognitionRef = useRef<any>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const listeningRef = useRef(false);
  const speakingRef = useRef(false);
  const restartTimeoutRef = useRef<number | null>(null);

  const clearRestartTimeout = useCallback(() => {
    if (restartTimeoutRef.current) {
      window.clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = null;
    }
  }, []);

  const releaseMicrophone = useCallback(() => {
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    mediaStreamRef.current = null;
  }, []);

  const stopRecognition = useCallback(() => {
    clearRestartTimeout();

    if (!recognitionRef.current) {
      return;
    }

    recognitionRef.current.onresult = null;
    recognitionRef.current.onerror = null;
    recognitionRef.current.onend = null;

    try {
      recognitionRef.current.stop();
    } catch {
      return;
    } finally {
      recognitionRef.current = null;
    }
  }, [clearRestartTimeout]);

  const stopSpeaking = useCallback(() => {
    speakingRef.current = false;
    window.speechSynthesis.cancel();
  }, []);

  const getResponse = useCallback((input: string) => {
    const text = input.toLowerCase();

    if (text.includes("portfolio")) {
      return "Let me walk you through Soundar's best work across AI, systems, and product design.";
    }

    if (text.includes("project") || text.includes("ai") || text.includes("design") || text.includes("crm")) {
      return "Soundar has worked on AI workflows, a scalable design system, and CRM analytics experiences. Ask which one you want to hear about next.";
    }

    if (text.includes("who are you") || text.includes("about you") || text.includes("soundar")) {
      return "Hey, I'm Soundar. I design digital products with a focus on clarity, systems thinking, and product impact.";
    }

    return "Sorry, I didn't get that. Try asking about the portfolio, a project, or who Soundar is.";
  }, []);

  const getStatusLabel = (currentStatus: VoiceAssistantStatus) => {
    switch (currentStatus) {
      case "listening":
        return "Listening";
      case "speaking":
        return "Speaking";
      case "unsupported":
        return "Voice not supported";
      case "denied":
        return "Microphone blocked";
      default:
        return "Ready";
    }
  };

  const ensureMicrophoneAccess = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("unsupported");
      setError("This browser doesn't expose microphone access for this experience.");
      return false;
    }

    try {
      if (!mediaStreamRef.current) {
        mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      }

      setError("");
      return true;
    } catch {
      listeningRef.current = false;
      setStatus("denied");
      setError("Microphone access is blocked. Please allow permission and try again.");
      return false;
    }
  }, []);

  const pickVoice = useCallback(() => {
    const voices = window.speechSynthesis.getVoices();
    const englishVoices = voices.filter((voice) => voice.lang.toLowerCase().includes("en"));

    return (
      englishVoices.find((voice) => /aria|samantha|serena|daniel|google uk english|zira/i.test(voice.name)) ||
      englishVoices[0] ||
      voices[0] ||
      null
    );
  }, []);

  const buildRecognition = useCallback(() => {
    if (recognitionRef.current) {
      return recognitionRef.current;
    }

    const SpeechRecognitionApi = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionApi) {
      setIsSpeechSupported(false);
      setStatus("unsupported");
      setError("Voice recognition isn't supported in this browser.");
      return null;
    }

    const recognition = new SpeechRecognitionApi();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const text = event.results?.[0]?.[0]?.transcript?.trim();

      if (!text) {
        return;
      }

      setTranscript(text);
      const nextResponse = getResponse(text);
      setResponse(nextResponse);
      stopSpeaking();

      const utterance = new SpeechSynthesisUtterance(nextResponse);
      const voice = pickVoice();

      if (voice) {
        utterance.voice = voice;
      }

      utterance.rate = 0.9;
      utterance.pitch = 1.05;
      utterance.volume = 1;

      utterance.onstart = () => {
        speakingRef.current = true;
        setStatus("speaking");
      };

      utterance.onend = () => {
        speakingRef.current = false;

        if (!listeningRef.current) {
          setStatus("idle");
          return;
        }

        restartTimeoutRef.current = window.setTimeout(() => {
          const nextRecognition = buildRecognition();

          if (!nextRecognition || !listeningRef.current) {
            return;
          }

          try {
            nextRecognition.start();
            setStatus("listening");
          } catch {
            setStatus("idle");
          }
        }, 240);
      };

      utterance.onerror = () => {
        speakingRef.current = false;
        setStatus(listeningRef.current ? "listening" : "idle");
      };

      window.speechSynthesis.speak(utterance);
    };

    recognition.onerror = (event: any) => {
      if (event?.error === "not-allowed" || event?.error === "service-not-allowed") {
        listeningRef.current = false;
        setStatus("denied");
        setError("Microphone access is blocked. Please allow permission and try again.");
        releaseMicrophone();
        stopRecognition();
        return;
      }

      if (event?.error === "no-speech") {
        setStatus(listeningRef.current ? "listening" : "idle");
        return;
      }

      setStatus("idle");
      setError("Voice recognition had trouble starting. Try again.");
    };

    recognition.onend = () => {
      recognitionRef.current = null;

      if (!listeningRef.current || speakingRef.current) {
        return;
      }

      restartTimeoutRef.current = window.setTimeout(() => {
        const nextRecognition = buildRecognition();

        if (!nextRecognition || !listeningRef.current) {
          return;
        }

        try {
          nextRecognition.start();
          setStatus("listening");
        } catch {
          setStatus("idle");
        }
      }, 220);
    };

    recognitionRef.current = recognition;
    return recognition;
  }, [getResponse, pickVoice, releaseMicrophone, stopRecognition, stopSpeaking]);

  const startListening = useCallback(async () => {
    const SpeechRecognitionApi = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionApi) {
      setIsSpeechSupported(false);
      setStatus("unsupported");
      setError("Voice recognition isn't supported in this browser.");
      return;
    }

    setIsSpeechSupported(true);

    const microphoneReady = await ensureMicrophoneAccess();

    if (!microphoneReady) {
      return;
    }

    listeningRef.current = true;
    setError("");
    stopSpeaking();
    clearRestartTimeout();

    const recognition = buildRecognition();

    if (!recognition) {
      return;
    }

    try {
      recognition.start();
      setStatus("listening");
    } catch {
      setStatus("listening");
    }
  }, [buildRecognition, clearRestartTimeout, ensureMicrophoneAccess, stopSpeaking]);

  const stopListening = useCallback(() => {
    listeningRef.current = false;
    clearRestartTimeout();
    stopSpeaking();
    stopRecognition();
    releaseMicrophone();
    setStatus("idle");
  }, [clearRestartTimeout, releaseMicrophone, stopRecognition, stopSpeaking]);

  const toggleListening = useCallback(async () => {
    if (listeningRef.current) {
      stopListening();
      return;
    }

    await startListening();
  }, [startListening, stopListening]);

  useEffect(() => {
    const SpeechRecognitionApi = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setIsSpeechSupported(Boolean(SpeechRecognitionApi));

    const populateVoices = () => {
      window.speechSynthesis.getVoices();
    };

    populateVoices();
    window.speechSynthesis.onvoiceschanged = populateVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      stopListening();
    };
  }, [stopListening]);

  return <>{children({ status, statusLabel: getStatusLabel(status), transcript, response, error, isSpeechSupported, isListening: status === "listening" || status === "speaking", startListening, stopListening, toggleListening })}</>;
}
