"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Soundar's ability to translate complex AI workflows into intuitive interfaces is unmatched. He completely transformed our product.",
    by: "Alex, VP of Product @Sense",
    imgSrc: "https://i.pravatar.cc/150?img=11"
  },
  {
    tempId: 1,
    testimonial: "The scalable design system Soundar built accelerated our team's velocity by 3x. Highly recommend his strategic approach.",
    by: "Dan, CTO @Glance",
    imgSrc: "https://i.pravatar.cc/150?img=12"
  },
  {
    tempId: 2,
    testimonial: "Soundar doesn't just make things look good; he fundamentally understands user behavior and business goals.",
    by: "Stephanie, Head of Design @Redbaton",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 3,
    testimonial: "Working with Soundar was a game-changer. His conversational interface designs set a new industry standard for us.",
    by: "Marie, Founder @Metafic",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars for his design thinking, I'd give 12. Absolute pleasure to work with.",
    by: "Andre, Director of UX",
    imgSrc: "https://i.pravatar.cc/150?img=14"
  },
  {
    tempId: 5,
    testimonial: "The B2B chat interface he designed reduced our users' cognitive load drastically. Brilliant work!",
    by: "Jeremy, Lead PM",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 6,
    testimonial: "A rare mix of aesthetic sensibility and technical understanding. He gets how products should feel.",
    by: "Pam, Product Director",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 7,
    testimonial: "Soundar brought our vague concepts to life with incredible clarity. The best design partner we've had.",
    by: "Daniel, CEO",
    imgSrc: "https://i.pravatar.cc/150?img=33"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out rounded-3xl",
        isCenter 
          ? "z-10 bg-white text-[#222] border-white shadow-xl" 
          : "z-0 bg-gradient-to-b from-[#f0f4f8] to-[#e8ecf1] text-[#555] border-transparent hover:shadow-md"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 12px 40px rgba(0,0,0,0.08)" : "none"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-[#f0f4f8]" : "bg-white/50"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top rounded-xl"
        style={{
          boxShadow: isCenter ? "3px 3px 0px #eaeaea" : "3px 3px 0px #ddd"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-[1.1rem] font-medium leading-[1.5] tracking-wide",
        isCenter ? "text-[#222]" : "text-[#555]"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-[14px] font-normal tracking-wide",
        isCenter ? "text-[#666]" : "text-[#888]"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden py-32 bg-white"
      style={{ minHeight: "800px" }}
    >
      <div className="absolute top-16 left-0 right-0 text-center z-20 px-6">
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium text-[#222] tracking-[-0.02em] leading-[1.1] mb-4">
          What others <span className="font-serif italic font-normal text-[#111]">say about me</span>
        </h2>
        <p className="text-[#666] text-[14px] md:text-[15px] leading-[1.6] max-w-[600px] mx-auto tracking-wide">
          Feedback from teams and leaders I've had the pleasure of working with
        </p>
      </div>

      <div className="relative mt-24 h-[500px]">
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
      </div>
      <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-4 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300 rounded-full",
            "bg-white border border-[#eee] text-[#555] hover:text-[#222] hover:shadow-md hover:-translate-y-0.5 hover:border-transparent",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft strokeWidth={1.5} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300 rounded-full",
            "bg-white border border-[#eee] text-[#555] hover:text-[#222] hover:shadow-md hover:-translate-y-0.5 hover:border-transparent",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};
