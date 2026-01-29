"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const STAGGER_MS = 120;

const FEATURES = [
  {
    image: "/images/Bistecca.webp",
    text: ["AUTHENTIC", "CUISINE"],
  },
  {
    image: "/images/Calamari.webp",
    text: ["FRESH & LOCAL", "INGREDIENTS"],
  },
  {
    image: "/images/Bolognese.webp",
    text: ["INVITING", "ATMOSPHERE"],
  },
  {
    image: "/images/Lasagna.webp",
    text: ["WELCOMING", "SERVICE"],
  },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#111] py-24 px-6 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 sm:flex-row sm:gap-6 lg:gap-8 xl:gap-12">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-1 flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center lg:gap-6 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? {
                      animationDelay: `${index * STAGGER_MS}ms`,
                      animationFillMode: "both",
                    }
                  : undefined
              }
            >
              <div className="relative h-16 w-16 shrink-0 group">
                {/* Enlarged image on hover - same as menu */}
                <div
                  className="absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 origin-bottom scale-95 opacity-0 shadow-2xl ring-1 ring-white/10 transition-[transform,opacity] duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 pointer-events-none"
                  aria-hidden
                >
                  <div className="relative h-52 w-52 overflow-hidden rounded-lg sm:h-64 sm:w-64">
                    <Image
                      src={feature.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="256px"
                    />
                  </div>
                </div>
                {/* Thumbnail - same hover as menu */}
                <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/20 transition-transform duration-300 ease-out group-hover:scale-105 cursor-pointer">
                  <Image
                    src={feature.image}
                    alt={feature.text.join(" ")}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <p className="font-barlow-c text-[18px] font-medium uppercase leading-relaxed tracking-[0.3em] text-white">
                  {feature.text[0]}
                </p>
                <p className="font-barlow-c text-[18px] font-medium uppercase leading-relaxed tracking-[0.3em] text-white">
                  {feature.text[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
