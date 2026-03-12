"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Overlay } from "./Overlay";

// Based on the user's sequence folder which contains 192 frames (000 to 191)
const FRAME_COUNT = 191;

export const ScrollyCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT]);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const id = i.toString().padStart(3, "0");
      // Load the sequence from public/sequence directory
      img.src = `/sequence/frame_${id}_delay-0.042s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT + 1) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (img?: HTMLImageElement) => {
    if (!img) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    if (img.complete) {
      // Logic for object-fit: cover behavior
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-draw current frame
        renderFrame(images[Math.round(frameIndex.get())]);
      }
    };
    
    // Initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  useEffect(() => {
    if (!imagesLoaded || images.length === 0) return;

    // Draw initial
    renderFrame(images[0]);

    const unsubscribe = frameIndex.on("change", (latest) => {
      const index = Math.round(latest);
      if (images[index]) {
        renderFrame(images[index]);
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameIndex, images, imagesLoaded]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#0a0f1e]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full block" 
        />
        <Overlay progress={scrollYProgress} />
        
        {/* Loading Indicator */}
        {!imagesLoaded && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center gap-3 bg-black/60 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
            <div className="w-4 h-4 border-2 border-sky-400/80 border-t-transparent rounded-full animate-spin" />
            <span className="text-white/70 text-sm font-medium tracking-widest uppercase">Preparing for departure...</span>
          </div>
        )}
      </div>
    </div>
  );
};
