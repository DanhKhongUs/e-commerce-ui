"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Search from "../Search";

export default function Header() {
  const currentUser = true;

  const pathname = usePathname();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shops", href: "/shops" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="sticky top-0 z-50 max-w-[1340px] w-full mx-auto h-24 px-6 flex items-center justify-between shadow-md bg-white rounded-xl mt-2 mb-4">
        {/* Logo */}
        <div className="px-10">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-16 h-16 rounded-full object-cover shadow-md bg-gradient-to-tr from-blue-500 to-purple-600 p-1 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          />
        </div>

        {/* Menu */}
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
          <div className="flex items-center">
            <Search />
          </div>

          <button className="relative hover:text-gray-800 cursor-pointer">
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
            <span className="absolute top-[-8px] right-[-8px] bg-pink-700 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
              5
            </span>
          </button>
          <div>
            {currentUser ? (
              <div className="w-10 h-10 relative rounded-full overflow-hidden border border-gray-300 shadow-sm hover:shadow-md transition cursor-pointer">
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
    </>
  );
}
