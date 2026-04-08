import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

export type VoiceAssistantIntent = "ai" | "design" | "saas" | "general";
export type VoiceAssistantStatus = "idle" | "listening" | "processing" | "speaking" | "unsupported" | "denied";

export interface VoiceAssistantRenderProps {
  status: VoiceAssistantStatus;
  statusLabel: string;
  transcript: string;
  response: string;
  error: string;
  isSpeechSupported: boolean;
  startListening: () => Promise<void>;
  stopAll: () => void;
}

interface VoiceAssistantProps {
  autoRestart?: boolean;
  onHighlightProject?: (intent: Exclude<VoiceAssistantIntent, "general">) => void;
  children: (props: VoiceAssistantRenderProps) => ReactNode;
}

const GENERAL_RESPONSE = "What you're experiencing is a conversational portfolio assistant embedded inside Soundar's portfolio. It is designed to make the experience feel more interactive, intuitive, and guided instead of relying only on static case studies.";
const AI_RESPONSE = "Soundar's AI project focuses on transforming CRM workflows with an AI agent builder. It helps teams generate hiring workflows through natural language, create dashboards faster, and turn user intent into structured CRM actions.";
const DESIGN_RESPONSE = "The design system work is centered on Genesis, a scalable CRM design system. The focus was on reusable components, tokens, consistency across modules, and faster delivery through a stronger product foundation.";
const SAAS_RESPONSE = "Soundar's SaaS and CRM work includes analytics dashboards and a custom dashboard builder for hiring teams. The goal was to make reporting more self-serve, easier to understand, and more useful for day-to-day decision making.";

export function VoiceAssistant({ autoRestart = true, onHighlightProject, children }: VoiceAssistantProps) {
  const [status, setStatus] = useState<VoiceAssistantStatus>("idle");
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState(GENERAL_RESPONSE);
  const [error, setError] = useState("");
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);

  const recognitionRef = useRef<any>(null);
  const speechTimeoutRef = useRef<number | null>(null);
  const restartTimeoutRef = useRef<number | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const statusRef = useRef<VoiceAssistantStatus>("idle");

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  const clearTimers = () => {
    if (speechTimeoutRef.current) {
      window.clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = null;
    }

    if (restartTimeoutRef.current) {
      window.clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = null;
    }
  };

  const stopRecognition = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.onresult = null;
      recognitionRef.current.onerror = null;
      recognitionRef.current.onend = null;
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
  }, []);

  const stopAll = useCallback(() => {
    clearTimers();
    stopRecognition();
    window.speechSynthesis.cancel();
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    mediaStreamRef.current = null;
    setStatus("idle");
  }, [stopRecognition]);

  useEffect(() => {
    return () => {
      stopAll();
    };
  }, [stopAll]);

  const getStatusLabel = (currentStatus: VoiceAssistantStatus) => {
    switch (currentStatus) {
      case "listening":
        return "Listening";
      case "processing":
        return "Processing";
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
      setStatus("denied");
      setError("Microphone access is blocked. Please allow permission and try again.");
      return false;
    }
  }, []);

  const pickVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    const englishVoices = voices.filter((voice) => voice.lang.toLowerCase().includes("en"));

    return (
      englishVoices.find((voice) => /aria|samantha|serena|google uk english|zira|daniel/i.test(voice.name)) ||
      englishVoices[0] ||
      voices[0] ||
      null
    );
  };

  const matchIntent = (input: string): VoiceAssistantIntent => {
    const message = input.toLowerCase();

    if (message.includes("ai")) return "ai";
    if (message.includes("design")) return "design";
    if (message.includes("saas") || message.includes("crm")) return "saas";
    return "general";
  };

  const buildResponse = (intent: VoiceAssistantIntent) => {
    switch (intent) {
      case "ai":
        return AI_RESPONSE;
      case "design":
        return DESIGN_RESPONSE;
      case "saas":
        return SAAS_RESPONSE;
      default:
        return GENERAL_RESPONSE;
    }
  };

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

    clearTimers();
    stopRecognition();
    window.speechSynthesis.cancel();
    setError("");
    setStatus("listening");
    setTranscript("Listening for your question...");

    const recognition = new SpeechRecognitionApi();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const result = Array.from(event.results)
        .slice(event.resultIndex)
        .map((entry: any) => entry[0]?.transcript || "")
        .join(" ")
        .trim();

      if (!result) {
        return;
      }

      setTranscript(result);

      if (!Array.from(event.results).some((entry: any) => entry.isFinal)) {
        return;
      }

      setStatus("processing");
      stopRecognition();

      const intent = matchIntent(result);
      const nextResponse = buildResponse(intent);
      setResponse(nextResponse);

      speechTimeoutRef.current = window.setTimeout(() => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(nextResponse);
        const voice = pickVoice();

        if (voice) {
          utterance.voice = voice;
        }

        utterance.rate = 0.9;
        utterance.pitch = 1.05;
        utterance.volume = 1;

        utterance.onstart = () => {
          setStatus("speaking");
        };

        utterance.onend = () => {
          if (intent !== "general") {
            onHighlightProject?.(intent);
            return;
          }

          if (autoRestart) {
            restartTimeoutRef.current = window.setTimeout(() => {
              startListening();
            }, 450);
            return;
          }

          setStatus("idle");
        };

        utterance.onerror = () => {
          setStatus("idle");
        };

        window.speechSynthesis.speak(utterance);
      }, 400);
    };

    recognition.onerror = (event: any) => {
      stopRecognition();

      if (event?.error === "not-allowed" || event?.error === "service-not-allowed") {
        setStatus("denied");
        setError("Microphone access is blocked. Please allow permission and try again.");
        return;
      }

      if (event?.error === "no-speech") {
        setStatus("idle");
        setError("I didn't catch anything. Try speaking again.");
        return;
      }

      setStatus("idle");
      setError("Voice recognition had trouble starting. Try again.");
    };

    recognition.onend = () => {
      recognitionRef.current = null;

      if (statusRef.current === "listening") {
        setStatus("idle");
      }
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      recognitionRef.current = null;
      setStatus("idle");
      setError("Voice recognition couldn't start cleanly. Try again.");
    }
  }, [autoRestart, ensureMicrophoneAccess, onHighlightProject, stopRecognition]);

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
    };
  }, []);

  return <>{children({ status, statusLabel: getStatusLabel(status), transcript, response, error, isSpeechSupported, startListening, stopAll })}</>;
}
