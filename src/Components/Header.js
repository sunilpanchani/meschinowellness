"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuItem from './MenuItem';

const Header = () => {

    const pathname = usePathname();
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = () => {
        setSidebarOpen(false);
    };

    const renderNavigation = () => {
        if (windowWidth < 992) {
            return (
                <div className='slicknav_menu'>
                    <Link
                        href="#"
                        role="button"
                        tabIndex="0"
                        className="slicknav_btn"
                        aria-haspopup="true"
                        onClick={toggleSidebar}
                        style={{ outline: 'none' }}
                    >
                        <span className="slicknav_menutxt"></span>
                        <span className="slicknav_icon slicknav_no-text">
                            <span className="slicknav_icon-bar"></span>
                            <span className="slicknav_icon-bar"></span>
                            <span className="slicknav_icon-bar"></span>
                        </span>
                    </Link>
                    {isSidebarOpen && (
                        <ul className="slicknav_nav" aria-hidden={!isSidebarOpen} style={{ display: isSidebarOpen ? 'block' : 'none' }}>
                            <MenuItem title="Home" link="/" onclick={handleLinkClick} />
                            <MenuItem
                                title='About'
                                link=''
                                submenuItems={[
                                    { title: 'About Us', link: '/about/us' },
                                    { title: 'About Dr. Meschino', link: '/about/dr-meschino' },
                                ]}
                                onclick={handleLinkClick}
                            />
                            <MenuItem
                                title='How It Works'
                                submenuItems={[
                                    { title: 'Individuals', link: '/how-it-works/individuals' },
                                    { title: 'Organizations', link: '/how-it-works/organizations' },
                                ]}
                                onclick={handleLinkClick}
                            />
                            <MenuItem
                                title='Wellness Program'
                                link=''
                                submenuItems={[
                                    { title: 'Individual Health', link: '/wellness-program/individual-wellness' },
                                    { title: 'Mental Health', link: '/wellness-program/mental-wellness' },
                                    { title: 'Corp Health', link: '/wellness-program/corporate-wellness' },
                                    { title: 'Wellness Eco-System', link: '/wellness-program/wellness-eco-system' },
                                    { title: 'Meschino Health Literacy', link: '/wellness-program/meschino-health-literacy' },
                                ]}
                                onclick={handleLinkClick}
                            />
                            <MenuItem title="Contact" link="/contact-us" onclick={handleLinkClick} />
                        </ul>
                    )}
                </div>
            );
        }
        else {
            return (
                <div>
                    <ul className="main_menu">
                        <li>
                            <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
                        </li>
                        <li>
                            <Link href="" className={pathname.includes("/about") ? "active" : ""}>About</Link>
                            <ul>
                                <li>
                                    <Link href="/about/us" className={pathname === "/about/us" ? "active" : ""}>About Us</Link>
                                </li>
                                <li>
                                    <Link href="/about/dr-meschino" className={pathname === "/about/dr-meschino" ? "active" : ""}>About Dr. Meschino</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="" className={pathname.includes("/how-it-works") ? "active" : ""}>How It Works</Link>
                            <ul>
                                <li>
                                    <Link href="/how-it-works/individuals" className={pathname === "/how-it-works/individuals" ? "active" : ""}>Individuals</Link>
                                </li>
                                <li>
                                    <Link href="/how-it-works/organizations" className={pathname === "/how-it-works/organizations" ? "active" : ""}>Organizations</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="" className={pathname.includes("/wellness-program") ? "active" : ""}>Wellness Program</Link>
                            <ul>
                                <li>
                                    <Link href="/wellness-program/individual-wellness" className={pathname === "/wellness-program/individual-wellness" ? "active" : ""}>Individual Health</Link>
                                </li>
                                <li>
                                    <Link href="/wellness-program/mental-wellness" className={pathname === "/wellness-program/mental-wellness" ? "active" : ""}>Mental Health</Link>
                                </li>
                                <li>
                                    <Link href="/wellness-program/corporate-wellness" className={pathname === "/wellness-program/corporate-wellness" ? "active" : ""}>Corp Health</Link>
                                </li>
                                <li>
                                    <Link href="/wellness-program/wellness-eco-system" className={pathname === "/wellness-program/wellness-eco-system" ? "active" : ""}>Wellness Eco-System</Link>
                                </li>
                                <li>
                                    <Link href="/wellness-program/meschino-health-literacy" className={pathname === "/wellness-program/meschino-health-literacy" ? "active" : ""}>Meschino Health Literacy</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/contact-us" className={pathname === "/contact/us" ? "active" : ""}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            );
        }
    };

    return (
        <>
            <div className="header_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-6">
                            <Link href="/" className="site_logo">
                                <img src="/img/logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="col-lg-10 text-center col-6">
                            <nav className="menu_bar">
                                {renderNavigation()}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;
