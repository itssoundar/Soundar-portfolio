import { Download, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Document, Page, pdfjs } from 'react-pdf';

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [numPages, setNumPages] = useState<number | null>(null);

  // Prevent background scrolling when resume modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  if (!isOpen) return null;
  
  return createPortal(
    <div 
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-5xl h-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100 shrink-0">
          <h3 className="font-medium font-sans text-lg">Resume Preview</h3>
          <div className="flex items-center gap-2">
            <a 
              href="/works/Soundar_resume2026.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white text-sm font-medium rounded-xl hover:bg-[#222] transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 w-full bg-[#525659] h-full overflow-y-auto">
          <div className="flex justify-center py-8 min-h-full">
            <Document
              file="/works/Soundar_resume2026.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              className="flex flex-col items-center gap-4"
              loading={
                <div className="flex items-center justify-center p-12 text-white">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white mr-3"></div>
                  Loading PDF...
                </div>
              }
              error={
                <div className="flex flex-col items-center justify-center p-12 text-white text-center">
                  <p className="mb-4">Failed to load PDF.</p>
                  <a 
                    href="/works/Soundar_resume2026.pdf" 
                    download
                    className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Instead
                  </a>
                </div>
              }
            >
              {Array.from(new Array(numPages || 0), (el, index) => (
                <Page 
                  key={`page_${index + 1}`} 
                  pageNumber={index + 1} 
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={Math.min(window.innerWidth > 768 ? 800 : window.innerWidth - 64, 1200)}
                  className="shadow-lg mb-4 bg-white"
                />
              ))}
            </Document>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
