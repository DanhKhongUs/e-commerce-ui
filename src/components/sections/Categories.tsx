"use client";

import {
  faChevronLeft,
  faChevronRight,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState, useEffect } from "react";

const categories = [
  {
    title: "LIFESTYLE SHOES",
    src: "/landing/category1.png",
    color: "bg-[#eceef0]",
  },
  {
    title: "BASKETBALL SHOES",
    src: "/landing/category2.png",
    color: "bg-[#f6f6f6]",
  },
  {
    title: "LIFESTYLE SHOES",
    src: "/landing/category1.png",
    color: "bg-[#eceef0]",
  },
  {
    title: "BASKETBALL SHOES",
    src: "/landing/category2.png",
    color: "bg-[#f6f6f6]",
  },
];

const extended = [
  categories[categories.length - 1],
  ...categories,
  categories[0],
];

export default function Categories() {
  const [current, setCurrent] = useState(1);
  const [noTransition, setNoTransition] = useState(false);

  const nextProduct = () => setCurrent((prev) => prev + 1);
  const prevProduct = () => setCurrent((prev) => prev - 1);

  useEffect(() => {
    const slider = document.getElementById("categories-slider");

    const handleTransitionEnd = () => {
      if (current === 0) {
        setNoTransition(true);
        setCurrent(categories.length);
      } else if (current === categories.length + 1) {
        setNoTransition(true);
        setCurrent(1);
      }
    };

    slider?.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      slider?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [current]);

  useEffect(() => {
    if (noTransition) {
      requestAnimationFrame(() => setNoTransition(false));
    }
  }, [noTransition]);

  return (
    <section className="flex h-[790px] justify-center bg-[#232321] pt-12 pl-13">
      <div className="max-w-[1440px] w-full flex flex-col gap-10 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center pr-16">
          <h1 className="text-white text-5xl lg:text-6xl font-bold">
            CATEGORIES
          </h1>
          <div className="flex gap-3">
            <button
              onClick={prevProduct}
              className="h-10 w-10 rounded-md bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white transition cursor-pointer"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={nextProduct}
              className="h-10 w-10 rounded-md bg-gray-300 hover:bg-gray-200 flex items-center justify-center text-black transition cursor-pointer"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          id="categories-slider"
          className={`flex transition-transform duration-500 ${
            noTransition ? "transition-none" : ""
          }`}
          style={{ transform: `translateX(-${current * 50}%)` }}
        >
          {extended.map((category, idx) => (
            <div
              key={idx}
              className={`relative min-w-[50%] flex flex-col justify-between p-6  ${category.color} `}
            >
              {/* Image */}
              <div className="relative flex justify-center pl-10">
                <Image
                  src={category.src}
                  alt={category.title}
                  width={500}
                  height={500}
                  className="object-contain h-[620px] w-auto"
                />
              </div>

              {/* Title + expand */}
              <div className="absolute flex justify-between items-end bottom-20 right-16 left-16">
                <h2 className="text-black text-4xl font-bold ">
                  {category.title}
                </h2>
                <button className="h-10 w-10 flex items-center justify-center rounded bg-[#232321] text-white hover:bg-gray-800 transition cursor-pointer">
                  <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
