import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
    return (
        <footer className="bg-dark text-light pt-4 pb-3 mt-5">
            <div className="container text-center">

                <h5 className="fw-bold mb-3">AI Audio Enhancer</h5>

                <p className="text-secondary mb-2">
                    Enhance your audio clarity using AI — noise removal, voice boosting,
                    and studio-quality optimization.
                </p>

                {/* Footer Links */}
                <div className="d-flex justify-content-center gap-4 mt-3 flex-wrap">
                    <a href="/" className="text-light text-decoration-none">Home</a>
                    <a href="/posts" className="text-light text-decoration-none">Posts</a>
                    <a href="/about" className="text-light text-decoration-none">About Us</a>
                    <a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a>
                    <a href="/terms" className="text-light text-decoration-none">Terms</a>
                    <a href="/dmca" className="text-light text-decoration-none">DMCA</a>
                    <a href="/contact" className="text-light text-decoration-none">Contact</a>
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
