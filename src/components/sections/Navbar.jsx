import React from "react";
import {Menu} from 'lucide-react';

const Navbar = () => {
    return(
        <nav className="fixed z-50 inset-x-0 top-0 lg:hidden flex justify-between items-center w-full  bg-nav-primary py-5 border-b-[0.5px] border-b-primary-tx/50">
            <div className="text-primary-tx pl-5">
                <h2>Gregory Subero. / Dev </h2>
            </div>
            <div className="text-primary-tx pr-5">
                <Menu />
            </div>
        </nav>
    )
}

export default Navbar;