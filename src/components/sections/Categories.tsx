"use client";

import {
  faChevronLeft,
  faChevronRight,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: "LIFESTYLE SHOES",
      src: "/landing/category1.png",
      color: "bg-[#eceef0]",
    },
    {
      id: 2,
      title: "BASKETBALL SHOES",
      src: "/landing/category2.png",
      color: "bg-[#f6f6f6]",
    },
  ];

  return (
    <section className="flex h-[824px] justify-center bg-[#232321] py-12">
      <div className="max-w-[1440px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex justify-between items-center px-16">
          <h1 className="text-white text-5xl lg:text-6xl font-bold">
            CATEGORIES
          </h1>
          <div className="flex gap-3">
            <button className="h-10 w-10 rounded-md bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white transition">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="h-10 w-10 rounded-md bg-gray-300 hover:bg-gray-200 flex items-center justify-center text-black transition">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 w-full">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative flex flex-col justify-between p-6 rounded-t-2xl ${category.color}`}
            >
              {/* Image */}
              <div className="relative flex justify-center pl-10">
                <Image
                  src={category.src}
                  alt={category.title}
                  width={500}
                  height={500}
                  className="object-contain h-[630px] w-auto"
                />
              </div>

              {/* Title + expand */}
              <div className="absolute flex justify-between items-end bottom-20 right-20 left-20">
                <h2 className="text-black text-4xl font-bold ">
                  {category.title}
                </h2>
                <button className="h-10 w-10 flex items-center justify-center rounded bg-[#232321] text-white hover:bg-gray-800 transition">
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
