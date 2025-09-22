"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Search from "../Search";
import { useState } from "react";

export default function Header() {
  const currentUser = true;
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shops", href: "/shops" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const handleTurnPage = () => {
    router.push("/");
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full mx-auto h-24 px-4 flex items-center justify-between md:justify-between shadow-md bg-white rounded-xl mt-2 mb-4">
        {/* Mobile menu toggle */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Logo */}
        <div onClick={handleTurnPage} className="md:px-10 flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md bg-gradient-to-tr from-blue-500 to-purple-600 p-1 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          />
        </div>

        {/* Nav */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative pb-1 font-bold text-lg"
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] bg-[#4A69E2] transition-all duration-300 rounded-2xl ${
                    isActive ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="hidden lg:block">
            <Search />
          </div>

          {/* Cart */}
          <button className="relative hover:text-gray-800 cursor-pointer">
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
            <span className="absolute top-[-8px] right-[-8px] bg-pink-700 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
              5
            </span>
          </button>

          {/* User */}
          <div>
            {currentUser ? (
              <div className="w-10 h-10 relative rounded-full hidden md:flex border border-gray-300 shadow-sm hover:shadow-md transition cursor-pointer">
                <Image
                  src="/salad.png"
                  alt="avatar"
                  fill
                  className="object-cover rounded-full"
                  sizes="100px"
                />
              </div>
            ) : (
              <button className="bg-gray-800 px-5 py-2 rounded-sm hover:bg-gray-700 cursor-pointer">
                <span className="text-white text-lg font-semibold">Login</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-60 bg-black/50 bg-opacity-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 z-70 w-70 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <nav className="flex flex-col items-center p-6 gap-6">
          {/* Avatar */}
          <div className="w-14 h-14 relative rounded-full border-2 border-gray-500 shadow-lg overflow-hidden">
            <Image
              src="/salad.png"
              alt="avatar"
              fill
              className="object-cover rounded-full"
              sizes="100px"
            />
          </div>

          {/* Search */}
          <div>
            <Search />
          </div>

          {/* Menu items */}
          <div className="flex flex-col gap-4 mt-4 w-full">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-full text-center py-2 rounded-md font-medium text-lg transition 
            ${
              isActive
                ? "text-blue-600 font-bold bg-blue-50"
                : "text-gray-800 hover:bg-gray-100"
            }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
}
