import React from "react";
import {Menu} from 'lucide-react';

const Navbar = () => {
    return(
        <nav className="flex justify-between items-center  bg-nav-primary">
            <div className="text-primary-tx">
                <h2>Gregory Subero. / Dev </h2>
            </div>
            <div className="text-primary-tx">
                <Menu />
            </div>
        </nav>
    )
}

export default Navbar;