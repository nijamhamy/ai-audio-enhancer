import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


export default function Posts() {
    const posts = [
        { id: 1, title: "How to Enhance Audio Like Adobe Podcast", date: "Jan 2026", desc: "Audio enhancement has become essential for YouTubers,." },
        { id: 2, title: "Boost Your YouTube Thumbnails with AI", date: "Jan 2026", desc: "A thumbnail determines whether someone clicks or scrolls." },
        { id: 3, title: "Create a Full Audio Enhance Website with React + FastAPI", date: "Developers can now build AI-powered editing tools easily using Demucs" },
        { id: 4, title: "Top 10 AI Tools for Creators in 2025", date: "Jan 2026", desc: "AI tools have changed content creation forever." },
        { id: 5, title: "What Is Noise Reduction? Complete Guide", date: "Jan 2026", desc: "Noise reduction is the process of removing background sounds like wind" },
        { id: 6, title: "How AI Removes Background Noise From Audio", date: "Jan 2026", desc: "Modern AI models can detect human voice frequencies and separate them from" },
        { id: 7, title: "Why Audio Quality Is More Important Than Video Quality", date: "Jan 2026", desc: "People forgive bad video, but they **never forgive bad audio" },
        { id: 8, title: "Best Microphones for YouTubers in 2025", date: "Jan 2026", desc: "Choosing the right microphone is the first step to great audio." },
        { id: 9, title: "How Loudness Normalization Works in Audio Editing", date: "Jan 2026", desc: "Loudness normalization ensures your audio sounds equally loud across devices" },
        { id: 10, title: "What Is Audio Compression? Beginner Guide", date: "Jan 2026", desc: "Compression reduces the difference between loud and soft sounds," },
        { id: 11, title: "How Equalization (EQ) Improves Voice Quality", date: "Jan 2026", desc: "EQ (Equalizer) shapes the tone of your voice by adjusting frequencies." },
        { id: 12, title: "How to Record Clean Audio Without Expensive Gear", date: "Jan 2026", desc: "You don’t need a studio to record great sound." },
        { id: 13, title: "Difference Between Noise Reduction and Voice Isolation", date: "Jan 2026", desc: "Both audio processes are different and used for different purposes." },
        { id: 14, title: "How Audio Enhancers Help You Get AdSense Approval", date: "Jan 2026", desc: "Google requires high-quality, original, user-friendly content." },
        { id: 15, title: "What Is LUFS and Why You Should Care?", date: "Jan 2026", desc: "LUFS stands for **Loudness Units Full Scale**. It measures how loud audio *sounds* to human ears." },
        { id: 16, title: "Why Room Echo Happens and How to Fix It", date: "Jan 2026", desc: "Room echo happens when sound bounces between the hard surfaces like walls," },
        { id: 17, title: "Best Free Tools to Improve Your Audio Online", date: "Jan 2026", desc: "You don’t need expensive software. These free tools work great." },
        { id: 18, title: "How to Record Clean Voice at Home", date: "Jan 2026", desc: "AI models use spectrogram separation to identify vocal frequencies a" },
        { id: 19, title: "What Is Clipping and How to Avoid It", date: "Jan 2026", desc: "Clipping happens when audio is recorded too loudly and exceeds the maximum level." },
        { id: 20, title: "Should You Use Auto-Tune for Speaking Videos?", date: "Jan 2026", desc: "Auto-tune is mainly for singing but can help speaking audio too." },
        { id: 21, title: "How to Make Your Voice Deeper Naturally", date: "Jan 2026", desc: "Deep voices feel more confident and powerful." },
        { id: 22, title: "How AI Helps People With Hearing Problems", date: "Jan 2026", desc: "AI audio technology helps millions of people around the world." },
        { id: 23, title: "How to Clean Up Old Audio Recordings", date: "Jan 2026", desc: "Old audio recordings often have noise, hum, and distortion." },
        { id: 24, title: "Podcast Audio Tips for Beginners", date: "Jan 2026", desc: "Good podcast audio helps you grow fast." },
        { id: 25, title: "How to Fix Background Talking in Audio", date: "Jan 2026", desc: "Background talking is the hardest noise to remove, but AI makes it possible." },
    ];

    // Show/Hide button on scroll
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <div className="container mt-5 pt-5 text-light">
            <h1 className="fw-bold mb-4 posts-page-title
            "
                style={{ color: "#3700fdff" }}>
                Latest Audio Enhancement Articles
            </h1>

            {/* Loop All Posts */}
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="card bg-dark text-light mb-4 border-secondary shadow-sm"
                >
                    <div className="card-body">
                        <h3 className="card-title fw-bold">{post.title}</h3>
                        <small className="text-secondary">{post.date}</small>

                        <p className="mt-2 text-light">{post.desc}</p>

                        <Link
                            to={`/posts/${post.id}`}
                            className="btn btn-primary fw-bold px-3"
                        >
                            Read More →
                        </Link>
                    </div>
                </div>
            ))}

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="btn btn-primary"
                    style={{
                        position: "fixed",
                        bottom: "30px",
                        right: "30px",
                        padding: "12px 18px",
                        borderRadius: "50px",
                        zIndex: 999,
                        boxShadow: "0px 4px 12px rgba(0,0,0,0.3)"
                    }}
                >
                    ⬆ Back to Top
                </button>
            )}

        </div>
    );
}
