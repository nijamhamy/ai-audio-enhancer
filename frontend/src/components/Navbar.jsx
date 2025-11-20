import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {

    const navRef = useRef();

    const closeMenu = () => {
        const menu = document.getElementById("navbarNav");
        if (menu && menu.classList.contains("show")) {
            menu.classList.remove("show");
        }
    };

    // CLOSE navbar WHEN CLICK OUTSIDE
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <nav ref={navRef} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
            <div className="container">

                <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>
                    Ai Audio Enhancer
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item"><Link className="nav-link" to="/" onClick={closeMenu}>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/posts" onClick={closeMenu}>Posts</Link></li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://youtube-thumbnail-hd.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                            >
                                Thumbnail Downloader
                            </a>
                        </li>

                        <li className="nav-item"><Link className="nav-link" to="/about" onClick={closeMenu}>About Us</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/privacy" onClick={closeMenu}>Privacy Policy</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/terms" onClick={closeMenu}>Terms</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/dmca" onClick={closeMenu}>DMCA</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
