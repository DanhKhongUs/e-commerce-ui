"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/salad.png",
  "/salad.png",
  "/salad.png",
  "/salad.png",
  "/salad.png",
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-center justify-center gap-10">
      {/* Thumbnails theo đường cong */}
      <div className="relative w-40 h-40">
        {images.map((img, index) => {
          const angle = (index / images.length) * 180 - 90; // chia đều nửa vòng tròn
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`absolute left-1/2 top-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition ${
                activeIndex === index ? "border-green-500" : "border-gray-300"
              }`}
              style={{
                transform: `rotate(${angle}deg) translate(70px) rotate(-${angle}deg)`,
              }}
            >
              <Image
                src={img}
                alt=""
                width={56}
                height={56}
                className="w-full h-full object-cover rounded-full"
              />
            </button>
          );
        })}
      </div>

      {/* Ảnh chính */}
      <div className="relative w-[400px] h-[400px] overflow-hidden rounded-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt="Main salad"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full h-full object-cover rounded-full"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
