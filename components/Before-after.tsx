"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(newPosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    //
    <section className="py-24 bg-linear-to-b from-primary/2 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-3xl font-semibold uppercase tracking-wide mb-4">
            Our Results
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#4CD1FE] mb-6 text-balance">
            Experience The Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance font-light">
            Drag the slider left and right to see the dramatic difference our
            professional cleaning service makes
          </p>
        </motion.div>

        {/* Slider container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={sliderRef}
            className="relative w-full overflow-hidden rounded-2xl shadow-premium-lg cursor-col-resize select-none group"
            onMouseDown={handleMouseDown}
          >
            {/* Before image */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "66.67%" }}
            >
              <Image
                src="/before.jpg"
                alt="Before cleaning - dirty carpet"
                fill
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
            </div>

            {/* After image (overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative w-full h-full"
                style={{ width: `${800 / (sliderPosition / 100)}px` }}
              >
                <Image
                  src="/after1.jpg"
                  alt="After cleaning - pristine carpet"
                  fill
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-accent cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground rounded-full p-4 shadow-premium hover:shadow-premium-lg transition-premium">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l-7 7m0 0l7 7m-7-7h18"
                  />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg font-bold text-sm">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg font-bold text-sm">
              After
            </div>
          </div>

          {/* Instructions */}
          <p className="text-center text-muted-foreground mt-6 text-sm">
            Drag the slider or click to compare
          </p>
        </motion.div>
      </div>
    </section>
  );
}
