import React from "react";
import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import NavLink from "../ui/NavLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "#", number: "01", text: "Habilidades" },
    { href: "#", number: "02", text: "Proyectos" },
    { href: "#", number: "03", text: "Trayectoria" },
    { href: "#", number: "04", text: "Contacto" },
  ];

  return (
    <>
      <nav className="fixed z-50 inset-x-0 top-0 lg:hidden flex justify-between items-center w-full bg-nav-primary py-5 border-b-[0.5px] border-b-primary-tx/50">
        <div className="text-primary-tx pl-5">
          <h2>Gregory Subero. / Dev </h2>
        </div>
        <div className="text-primary-tx md:hidden flex items-center justify-center pr-5">
          <button
            className="border rounded-full p-1.5 border-primary-tx/10 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 bg-nav-primary transition-all ease-in-out duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        <div
          id="menu-mobile"
          className="flex flex-col gap-y-4 px-5 pt-28 h-screen w-full"
        >
          {navLinks.map((link) => (
            <div onClick={closeMenu} key={link.number}>
              <NavLink href={link.href} number={link.number}>
                {link.text}
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <ul
          className={`lg:flex flex-col gap-x-10 text-sm ${isMenuOpen ? "block" : "hidden"}`}
        >
          {navLinks.map((link) => (
            <li key={link.number} className="mb-4 lg:mb-0">
              <NavLink
                href={link.href}
                number={link.number}
                className="flex-col"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
