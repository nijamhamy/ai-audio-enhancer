import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
    return (
        <footer className="bg-dark text-light pt-4 pb-3 mt-5">
            <div className="container text-center">

                <h5 className="fw-bold mb-3">AI Audio Enhancer</h5>

                <p className="text-secondary mb-2">
                    AI-powered audio clarity — noise removal, voice enhancement,
                    and studio-level optimization.
                </p>

                {/* Footer Links */}
                <div className="d-flex justify-content-center gap-4 mt-3 flex-wrap">

                    <Link to="/" className="text-light text-decoration-none">Home</Link>

                    <Link to="/posts" className="text-light text-decoration-none">Posts</Link>
                    <Link to="/about" className="text-light text-decoration-none">About Us</Link>
                    <Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link>
                    <Link to="/terms" className="text-light text-decoration-none">Terms</Link>
                    <Link to="/dmca" className="text-light text-decoration-none">DMCA</Link>
                    <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
                </div>

                {/* Divider */}
                <hr className="border-secondary mt-4" />

                {/* Bottom Credits */}
                <p className="text-secondary mb-0">
                    © {new Date().getFullYear()} AI Audio Enhancer — All Rights Reserved.
                </p>
                <p className="text-secondary mb-0" style={{ fontSize: "14px" }}>
                    Made with ❤️ by Nijam
                </p>
            </div>
        </footer>
    );
}
