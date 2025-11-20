import React from "react";

function DMCA() {
    return (
        <div className="container mt-5 pt-5" style={{ maxWidth: "900px" }}>
            <h1 className="fw-bold mb-4 text-dark">DMCA Policy</h1>

            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                We respect the intellectual property rights of others and expect our users to do the same.
                If you believe that any content on our website infringes your copyright,
                you may submit a DMCA takedown request to us.
            </p>

            <h4 className="mt-4 text-dark">1. Copyright Infringement Notification</h4>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                If you are the owner of copyrighted material or you are authorized to act
                on behalf of the owner, and you believe that your copyrighted work has
                been used on this website without permission, please send us a written notice
                containing the following information:
            </p>

            <ul className="text-secondary" style={{ lineHeight: "1.8" }}>
                <li>Your full name and contact information (email, address, phone number).</li>
                <li>The URL of the copyrighted content you want removed.</li>
                <li>A description of the copyrighted work you claim is infringed.</li>
                <li>A statement confirming that you believe in good faith that the use is not authorized.</li>
                <li>A statement that the information you provided is accurate.</li>
                <li>Your digital or physical signature.</li>
            </ul>

            <h4 className="mt-4 text-dark">2. Send DMCA Notice To</h4>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                <strong className="text-dark">Email:</strong> amnijam60@gmail.com
                <br />
                Please use the subject line: <strong className="text-dark">"DMCA Takedown Request"</strong>
            </p>

            <h4 className="mt-4 text-dark">3. Counter Notification</h4>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                If you believe that your content was removed incorrectly or due to a mistake,
                you may send a counter-notification. Your notice must include:
            </p>

            <ul className="text-secondary" style={{ lineHeight: "1.8" }}>
                <li>Your name, address, phone number, and email.</li>
                <li>URL of the content that was removed.</li>
                <li>A statement under penalty of perjury that the content was removed by mistake.</li>
                <li>Your consent to the jurisdiction of your local court.</li>
                <li>Your digital or physical signature.</li>
            </ul>

            <h4 className="mt-4 text-dark">4. Repeat Infringers</h4>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                We may remove or block access to users who repeatedly violate copyright laws.
            </p>

            <h4 className="mt-4 text-dark">5. Disclaimer</h4>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                We do not host copyrighted files on our server unless explicitly stated.
                Any external links are the responsibility of their respective owners.
            </p>
        </div>
    );
}

export default DMCA;
