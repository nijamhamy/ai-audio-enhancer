// src/pages/Privacy.jsx
export default function Privacy() {
    return (
        <div className="container mt-5 pt-5 text-light" style={{ maxWidth: "900px" }}>
            <h1 className="fw-bold mb-4 text-dark">Privacy Policy</h1>

            <p className="text-dark">
                Last updated: November 2025
            </p>

            <hr className="border-secondary mb-4" />

            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                This Privacy Policy explains how we collect, use, and protect your
                information when you use our website{" "}
                <span className="text-light fw-semibold">[Your Website Name]</span>{" "}
                (the &quot;Website&quot;). By accessing or using this Website, you agree
                to the terms of this Privacy Policy.
            </p>

            {/* 1. Information We Collect */}
            <h3 className="fw-bold mt-4 text-dark">1. Information We Collect</h3>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                We do not ask you to create an account or upload personal documents.
                However, we may collect certain information automatically when you use
                our Website, including:
            </p>
            <ul className="text-secondary">
                <li>IP address and approximate location</li>
                <li>Browser type and version</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on the Website</li>
                <li>Referring website or URL</li>
            </ul>

            {/* 2. Cookies and Tracking Technologies */}
            <h3 className="fw-bold mt-4">2. Cookies and Tracking Technologies</h3>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                We use cookies and similar technologies to improve user experience,
                analyze traffic, and remember your preferences. Cookies are small text
                files stored on your device. You can choose to disable cookies through
                your browser settings, but some features of the Website may not function
                properly.
            </p>

            {/* 3. Use of Google AdSense & Third-Party Ads */}
            <h3 className="fw-bold mt-4 text-dark">3. Advertising &amp; Google AdSense</h3>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                This Website may display advertisements served by Google or other
                third-party advertising partners. These partners may use cookies and
                similar technologies to show ads based on your visits to this and other
                websites.
            </p>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                Google, as a third-party vendor, may use cookies to serve ads on our
                Website. Google&apos;s use of advertising cookies enables it and its
                partners to serve ads to users based on their visit to our Website and/or
                other sites on the Internet. Users may opt out of personalized advertising
                by visiting Google&apos;s Ads Settings.
            </p>

            {/* 4. How We Use Your Information */}
            <h3 className="fw-bold mt-4">4. How We Use Your Information</h3>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                The information we collect is used for purposes such as:
            </p>
            <ul className="text-secondary">
                <li>Improving the quality and performance of the Website</li>
                <li>Monitoring usage and analyzing trends</li>
                <li>Fixing technical issues and enhancing security</li>
                <li>Displaying relevant content and advertisements</li>
            </ul>

            {/* 5. Third-Party Links */}
            <h3 className="fw-bold mt-4 text-dark">5. Third-Party Links</h3>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                Our Website may contain links to external sites that are not operated by
                us. We are not responsible for the content, privacy practices, or
                policies of these third-party websites. We recommend that you review the
                privacy policy of any website you visit.
            </p>

            {/* 6. Data Security */}
            <h3 className="fw-bold mt-4 text-dark">6. Data Security</h3>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                We take reasonable measures to protect your information from
                unauthorized access, loss, or misuse. However, please understand that no
                method of transmission over the Internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
            </p>

            {/* 7. Children’s Privacy */}
            <h3 className="fw-bold mt-4 text-dark">7. Children&apos;s Privacy</h3>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                Our Website is not directed to children under the age of 13, and we do
                not knowingly collect personal information from children. If you believe
                that a child has provided us with personal information, please contact us
                so that we can remove it.
            </p>

            {/* 8. Changes to This Privacy Policy */}
            <h3 className="fw-bold mt-4 text-dark">8. Changes to This Privacy Policy</h3>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                We may update this Privacy Policy from time to time to reflect changes in
                our practices or for legal, operational, or regulatory reasons. Any
                updates will be posted on this page with a new &quot;Last updated&quot;
                date. We encourage you to review this page periodically.
            </p>

            {/* 9. Contact Us */}
            <h3 className="fw-bold mt-4 text-dark">9. Contact Us</h3>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                If you have any questions or concerns about this Privacy Policy, you can
                contact us at:
            </p>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                Email:{" "}
                <a href="mailto:amnijam60@gmail.com" className="link-secondery">
                    amnijam60@gmail.com
                </a>
                <br />
            </p>
        </div>
    );
}
