export default function About() {
    return (
        <div className="container mt-5 pt-5"
            style={{ maxWidth: "900px" }}
        >
            <h1 className="fw-bold">About Us</h1>

            <p className="mt-3 text-secondary" style={{ lineHeight: "1.8" }}>
                Welcome to our website! We are focused on providing useful, high-quality
                tools and informative content to help users enhance their digital
                experience. Our mission is to deliver reliable, easy-to-use solutions
                such as audio enhancement guides, online utilities, and technology tips
                that benefit creators, students, and professionals worldwide.
            </p>

            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                We are committed to maintaining accuracy, transparency, and a
                user-first experience. All content published on this website is created
                independently, based on research and personal knowledge. We do not host
                or promote any copyrighted material. Users are encouraged to follow all
                relevant guidelines and policies when using our tools.
            </p>

            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                Our goal is to keep improving and offer more features that support
                creativity and productivity. If you have suggestions, feedback, or
                requests, feel free to contact us anytime.
            </p>

            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                Thank you for visiting our website and being a part of our journey!
            </p>
        </div>
    );
}
