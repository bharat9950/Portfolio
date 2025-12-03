import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash, BsTelephone } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Nav = () => {
    const [navbarBlur, setNavbarBlur] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY >= 20) {
                setNavbarBlur(true);
            } else {
                setNavbarBlur(false);
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={navbarBlur ? 'Navbar blur' : 'Navbar'}>
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>
                BR <span>.</span>
            </h1>

            <div className={`Hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <ul className={`NavbarLinks ${menuOpen ? 'showNavbar' : ''}`}>
                <li onClick={closeMenu}>
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                        <AiOutlineHome /> Home
                    </Link>
                </li>
                <li onClick={closeMenu}>
                    <Link to="/Project" className={location.pathname === "/Project" ? "active" : ""}>
                        <BsCodeSlash /> Project
                    </Link>
                </li>
                <li onClick={closeMenu}>
                    <Link to="/Skills" className={location.pathname === "/Skills" ? "active" : ""}>
                        <CgFileDocument /> Skills
                    </Link>
                </li>
                <li onClick={closeMenu}>
                    <Link to="/Contact" className={location.pathname === "/Contact" ? "active" : ""}>
                        <BsTelephone /> Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;