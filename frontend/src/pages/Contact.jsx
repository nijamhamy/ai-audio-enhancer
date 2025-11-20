import React from "react";

function Contact() {
    return (
        <div className="container mt-5 pt-5" style={{ maxWidth: "900px" }}>
            <h1 className="fw-bold mb-4 text-dark">Contact Us</h1>

            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                If you have any questions, suggestions, feedback, or concerns related to our website,
                tools, or policies, feel free to reach out to us. We value your input and will do our
                best to respond as soon as possible.
            </p>

            <h4 className="mt-4 text-dark">Email Support</h4>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                You can contact us directly via email for all inquiries, including:
            </p>

            <ul className="text-secondary" style={{ lineHeight: "1.8" }}>
                <li>General questions</li>
                <li>Technical support</li>
                <li>Copyright or DMCA concerns</li>
                <li>Website issues or bug reports</li>
                <li>Advertisement or business inquiries</li>
            </ul>

            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                <strong className="text-dark">Email:</strong>{" "}
                <a href="mailto:amnijam60@gmail.com" className="link-info">
                    amnijam60@gmail.com
                </a>
            </p>

            <h4 className="mt-4 text-dark">Response Time</h4>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                We typically respond within 24–48 hours. Response times may vary depending on the volume
                of messages we receive.
            </p>

            <h4 className="mt-4 text-dark">Important Notice</h4>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                To help us address your concern efficiently, please provide as much detail as possible,
                including screenshots (if needed) and the exact URL related to your inquiry.
            </p>

            <p className="text-secondary mt-4" style={{ lineHeight: "1.8" }}>
                Thank you for contacting us. We appreciate your support and feedback!
            </p>
        </div>
    );
}

export default Contact;
