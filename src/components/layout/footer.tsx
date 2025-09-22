"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  const [query, setQuery] = useState("");

  const categories = [
    { id: 1, name: "Runners" },
    { id: 2, name: "Sneakers" },
    { id: 3, name: "Basketball" },
    { id: 4, name: "Outdoor" },
    { id: 5, name: "Golf" },
    { id: 6, name: "Hiking" },
  ];

  const companies = [
    { id: 1, name: "Shops", link: "/shops" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Contact", link: "/contact" },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.startsWith(" ")) value = value.trimStart();
    setQuery(value);
  };

  const handleKeyDown = () => {
    const trimmed = query.trimStart();
    if (!trimmed) return;
    setQuery("");
    console.log(trimmed);
  };

  return (
    <footer className="w-full mt-20 flex flex-col items-center">
      <div className="max-w-[1320px] w-full flex flex-col">
        {/* Newsletter */}
        <div className="bg-[#4a69e2] w-full flex flex-col lg:flex-row justify-between items-center rounded-t-4xl px-6 md:px-20 pt-6 pb-18 gap-8">
          <div className="flex flex-col gap-4 md:gap-6 text-center ">
            <h1 className="text-3xl md:text-5xl text-white font-semibold leading-tight">
              JOIN OUR KICKS PLUS <br /> CLUB & GET 15% OFF
            </h1>
            <span className="text-white">
              Sign up for free! Join the community.
            </span>
            <div className="flex gap-2 w-full max-w-md mx-auto md:mx-0">
              <input
                className="flex-1 h-12 outline-none border-2 pl-4 rounded-md text-gray-100"
                type="text"
                value={query}
                placeholder="Email address"
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => e.key === "Enter" && handleKeyDown()}
              />
              <button className="bg-black text-white rounded-md font-normal px-4 md:px-6 hover:bg-gray-900 transition cursor-pointer">
                SUBMIT
              </button>
            </div>
          </div>
          <div className="relative hidden justify-center lg:flex">
            <Image
              src="/kick.png"
              alt="kick"
              width={250}
              height={250}
              className="object-contain h-60 w-60 md:h-80 md:w-80"
            />
          </div>
        </div>

        {/* Bottom Info */}
        <div className="bg-[#232321] w-full rounded-t-4xl rounded-b-4xl px-6 -mt-12 md:px-20 py-10 text-white">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-2">
                About us
              </h2>
              <p>We are the biggest hyper store in the universe.</p>
              <p>
                We got are all cover with our exclusive <br />
                collections and latest drops.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-yellow-500 mb-2">
                Categories
              </h2>
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="mb-1 hover:underline cursor-pointer"
                >
                  <span>{category.name}</span>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-yellow-500 mb-2">
                Company
              </h2>
              {companies.map((company) => (
                <div key={company.id} className="mb-1 hover:underline">
                  <Link href={company.link}>{company.name}</Link>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-yellow-500 mb-2">
                Follow us
              </h2>
              <div className="flex gap-4">
                <Link href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                </Link>
                <Link href="https://www.instagram.com">
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </Link>
                <Link href="https://www.github.com">
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </Link>
                <Link href="https://www.tiktok.com">
                  <FontAwesomeIcon icon={faTiktok} size="xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-900 bg-transparent p-4 underline text-sm">
        © All rights reserved 2025 - Made with ❤️ by Thanh Danh
      </div>
    </footer>
  );
}
