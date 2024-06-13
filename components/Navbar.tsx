"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Menú para dispositivos grandes */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="flex items-center">
            <Link
              href={link.href}
              className="regular-16 text-gray-50 flex cursor-pointer pb-1.5 transition-all hover:font-bold hover:border-b-4 hover:border-black hover:pb-0"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Icono de hamburguesa para dispositivos pequeños */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {/* Menú desplegable para dispositivos pequeños con transición */}
      <ul
        className={`absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="border-b border-gray-200">
            <Link
              href={link.href}
              className="block p-4 hover:bg-black hover:text-white" // Aquí se agregó hover:text-white y hover:bg-black
              onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
