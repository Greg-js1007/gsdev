import React from "react";
import { useState } from "react";
import {Menu} from 'lucide-react';
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
    ]

    return(
        <nav className="fixed z-50 inset-x-0 top-0 lg:hidden flex justify-between items-center w-full  bg-nav-primary py-5 border-b-[0.5px] border-b-primary-tx/50">
            <div className="text-primary-tx pl-5">
                <h2>Gregory Subero. / Dev </h2>
            </div>
            <div className="text-primary-tx pr-5">
                <Menu />
            </div>
            {isMenuOpen &&(
                <div id="menu-mobile" className="flex flex-col gap-y-4" >
                {navLinks.map((link) => (
                    <NavLink key={link.number} href={link.href} number={link.number}>
                        {link.text}
                    </NavLink>
                ))}
            </div>
            )}
        </nav>
    )
}

export default Navbar;