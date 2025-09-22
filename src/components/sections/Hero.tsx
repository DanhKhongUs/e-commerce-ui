"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const images = [
  "/landing/hero1.png",
  "/landing/hero2.png",
  "/landing/hero3.png",
  "/landing/hero4.png",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handlePrevPage = () => {
    router.push("/shops");
  };

  return (
    <div className="flex justify-center items-center px-4">
      <div className="max-w-[1320px] w-full grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
        {/* Layout 1 */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background image */}
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-extrabold text-gray-900 leading-tight">
              DO IT <span className="text-[#4a69e2]">RIGHT</span>
            </h1>
          </div>
          <div>
            <Image
              src="/landing/slide.png"
              alt="Nike Air Max"
              width={700}
              height={700}
              className="w-full h-[420px] sm:h-[500px] md:h-[680px] object-cover rounded-2xl shadow-lg"
            />

            {/* Overlay text */}
            <div className="absolute bottom-6 left-4 sm:bottom-8 sm:left-8 text-white max-w-xs sm:max-w-md">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                NIKE AIR MAX
              </h2>
              <p className="text-sm sm:text-base md:text-lg mt-2">
                Nike introducing the new air max for
                <br /> everyone&apos;s comfort
              </p>
              <button
                onClick={handlePrevPage}
                className="mt-4 px-4 sm:px-6 py-2 bg-[#4a69e2] hover:bg-blue-600 rounded-lg text-sm sm:text-base font-semibold cursor-pointer transition"
              >
                SHOP NOW
              </button>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-8 right-8 flex flex-col gap-3">
              <Image
                src="/landing/zoom1.png"
                alt="Nike thumb 1"
                width={100}
                height={100}
                className="w-24 h-24 rounded-lg object-cover shadow-md"
              />
              <Image
                src="/landing/zoom2.png"
                alt="Nike thumb 2"
                width={100}
                height={100}
                className="w-24 h-24 rounded-lg object-cover shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Layout 2 */}
        <div className="relative w-full h-[680px] hidden xl:flex items-center justify-center ">
          <div className="absolute inset-0 z-0">
            <Image
              src="/landing/slide2.png"
              alt="slide 2"
              width={700}
              height={700}
              className="w-full h-[700px] object-cover rounded-2xl shadow-lg blur-xl"
            />
          </div>

          {/* Ảnh chính */}
          <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[380px] xl:h-[380px] overflow-hidden rounded-full shadow-lg z-10">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={images[activeIndex]}
                alt="Main shoe"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute w-full h-full object-cover rounded-full"
              />
            </AnimatePresence>
          </div>

          {/* Ảnh nhỏ nửa vòng tròn bên trái */}
          {images.map((img, index) => {
            const angle = 90 + (index / (images.length - 1)) * 160;
            const radius = 240;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-20 h-20 rounded-full border-2 bg-white shadow-md transition cursor-pointer ${
                  activeIndex === index
                    ? "border-blue-400 scale-110"
                    : "border-gray-300"
                }`}
                style={{
                  left: `calc(50% + ${x}px - 40px)`,
                  top: `calc(50% + ${y}px - 40px)`,
                }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
