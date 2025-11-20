import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
    const [audioFile, setAudioFile] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

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


    const handleFileUpload = (event) => {
        setAudioFile(event.target.files[0]);
        setMessage("");
    };

    const enhanceAudio = async () => {
        if (!audioFile) {
            setMessage("⚠ Please upload an audio file.");
            return;
        }

        setLoading(true);
        setMessage("");
        setDownloadUrl("");

        const formData = new FormData();
        formData.append("file", audioFile);
        try {
            const API_URL =
                import.meta.env.VITE_API_URL ||
                "https://audio-enhancer-backend-production-f297.up.railway.app";

            const response = await axios.post(
                `${API_URL}/enhance`,
                formData,
                {
                    responseType: "blob",
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                }
            );

            const url = window.URL.createObjectURL(new Blob([response.data]));
            setDownloadUrl(url);
            setMessage("✔ Audio Enhanced Successfully!");
        } catch (error) {
            console.error(error);
            setMessage("❌ Something went wrong. Try again.");
        }




        setLoading(false);
    };

    return (
        <div className="container" style={{ marginTop: "120px", maxWidth: "700px" }}>

            {/* Title */}
            <h1 className="fw-bold text-primary text-center mb-4">
                🎧 AI Audio Enhancer
            </h1>

            <p className="text-center text-secondary mb-4 fs-5">
                Remove background noise • Boost clarity • Normalize volume
                <br />
                Get <strong>studio-quality voice enhancement using AI</strong>.
            </p>

            {/* Main Card */}
            <div className="card shadow-lg p-4 border-0 rounded-4">
                <h4 className="fw-bold mb-3 text-dark">Upload Audio File</h4>

                <input
                    type="file"
                    className="form-control mb-3 p-3"
                    accept="audio/*"
                    onChange={handleFileUpload}
                />

                {/* Loading Animation */}
                {loading && (
                    <div className="text-center my-3">
                        <div className="spinner-border text-primary" role="status"></div>
                        <p className="text-primary fw-bold mt-2">Processing... Please wait</p>
                    </div>
                )}

                {/* Button */}
                {!loading && (
                    <button className="btn btn-primary w-100 fw-bold py-2" onClick={enhanceAudio}>
                        🚀 Enhance Audio
                    </button>
                )}

                {/* Messages */}
                {message && (
                    <div className="alert alert-info text-center mt-3 fw-bold">{message}</div>
                )}

                {/* Download Button */}
                {downloadUrl && (
                    <a
                        className="btn btn-success w-100 fw-bold py-2 mt-3"
                        href={downloadUrl}
                        download="enhanced_audio.wav"
                    >
                        ⬇ Download Enhanced Audio
                    </a>
                )}


            </div>
            <p className="text-center text-secondary mt-4 mb-5">
                Made with using AI Noise Removal + Studio-Grade Enhancement
            </p>
            {/* ========================= */}
            {/* ARTICLE SECTION           */}
            {/* ========================= */}
            <section className="mt-5">
                <h2 className="fw-bold mb-3 text-dark">
                    What Is AI Audio Enhancement and Why Does It Matter?
                </h2>

                <p className="text-secondary">
                    In today’s world, audio quality is just as important as video quality. Whether
                    you are recording a YouTube video, a podcast, an online class, a Zoom meeting,
                    or a voiceover for your project, clear and clean audio can make a huge
                    difference in how professional you sound. Even if you have a great camera and
                    good content, noisy or low-quality audio will push people away very quickly.
                </p>

                <p className="text-secondary">
                    AI audio enhancement is the process of using intelligent algorithms to analyze
                    your recording and automatically improve it. Instead of manually adjusting
                    equalizers, compressors, noise gates, and filters, AI listens to your voice,
                    detects problems like background noise, volume imbalance, or muffled tone, and
                    then corrects them in a smart way. The goal is to make your voice sound more
                    natural, balanced, and pleasant to listen to.
                </p>

                <h3 className="fw-bold mt-4">
                    Common Problems in Raw Audio Recordings
                </h3>

                <p className="text-secondary">
                    Most people record audio in normal rooms – bedrooms, offices, classrooms, or
                    living rooms – not in professional studios. Because of this, your recordings
                    often suffer from:
                </p>

                <ul className="text-secondary">
                    <li>
                        <strong>Background noise</strong> – fan sounds, AC, traffic, keyboard noise,
                        people talking in the next room, echo in the room, etc.
                    </li>
                    <li>
                        <strong>Low volume</strong> – the microphone is too far from your mouth, so
                        your voice sounds weak and difficult to hear on mobile speakers.
                    </li>
                    <li>
                        <strong>Harsh “S” sounds (sibilance)</strong> – when you say words with “S”
                        or “SH”, the sound feels sharp and unpleasant.
                    </li>
                    <li>
                        <strong>Inconsistent loudness</strong> – some parts are too loud and others
                        are too soft, so the listener keeps changing the volume.
                    </li>
                    <li>
                        <strong>Room echo</strong> – your voice sounds like it is in a bathroom or a
                        hollow room, which reduces clarity.
                    </li>
                </ul>

                <p className="text-secondary">
                    Manually fixing all of this requires experience with audio software like
                    Audacity, Premiere Pro, Audition, Reaper, or other DAWs. AI audio enhancement
                    tools simplify this process and give you good results in a few clicks.
                </p>

                <h3 className="fw-bold mt-4">
                    How Our AI Audio Enhancer Helps You
                </h3>

                <p className="text-secondary">
                    This web tool is designed for creators, teachers, students, and professionals
                    who want clean audio without learning complicated sound engineering. When you
                    upload your file and click the <strong>“Enhance Audio”</strong> button, the
                    backend processes your recording with multiple smart steps:
                </p>

                <ul className="text-secondary">
                    <li>
                        <strong>Format conversion:</strong> Your audio is converted to a clean WAV
                        format so it can be processed reliably.
                    </li>
                    <li>
                        <strong>Silence trimming:</strong> Long empty parts at the start or end of
                        your recording are reduced to make the result feel tighter.
                    </li>
                    <li>
                        <strong>Noise reduction:</strong> Constant background noise is reduced so
                        your voice becomes more clear and easy to understand.
                    </li>
                    <li>
                        <strong>Voice enhancement:</strong> The system focuses on your voice
                        frequencies to make speech more present and natural.
                    </li>
                    <li>
                        <strong>Loudness normalization:</strong> The overall volume is adjusted to a
                        consistent level, so listeners don’t need to adjust their volume often.
                    </li>
                    <li>
                        <strong>Final limiting:</strong> Sudden loud peaks are controlled to avoid
                        distortion or clipping.
                    </li>
                </ul>

                <p className="text-secondary">
                    The result is an enhanced audio file that sounds cleaner, louder, and more
                    professional, even though you recorded it in a normal environment.
                </p>

                <h3 className="fw-bold mt-4">
                    Best Use Cases for AI Audio Enhancement
                </h3>

                <p className="text-secondary">
                    You can use this tool in many situations where voice clarity is important:
                </p>

                <ul className="text-secondary">
                    <li>
                        <strong>YouTube videos</strong> – make your commentary, tutorials, and
                        vlogs easier to listen to.
                    </li>
                    <li>
                        <strong>Podcasts</strong> – improve episodes recorded at home or in a
                        noisy environment.
                    </li>
                    <li>
                        <strong>Online classes</strong> – teachers and students can record
                        lectures or presentations and then enhance the audio.
                    </li>
                    <li>
                        <strong>Business calls and webinars</strong> – clean up recorded Zoom or
                        Meet sessions for sharing later.
                    </li>
                    <li>
                        <strong>Voiceovers for videos</strong> – record your script with a simple
                        mic and then enhance it to sound more professional.
                    </li>
                </ul>

                <h3 className="fw-bold mt-4">
                    Tips to Get Better Audio Before Enhancement
                </h3>

                <p className="text-secondary">
                    AI enhancement can dramatically improve your audio, but if you record with some
                    simple care, the results will be even better. Here are a few practical tips:
                </p>

                <ul className="text-secondary">
                    <li>
                        <strong>Keep the mic close:</strong> Hold the microphone or phone around
                        10–20 cm from your mouth. The closer your voice, the less background noise.
                    </li>
                    <li>
                        <strong>Record in a soft room:</strong> Rooms with curtains, beds,
                        carpets, or sofas absorb echo. Avoid empty rooms with only tiles and walls.
                    </li>
                    <li>
                        <strong>Turn off noisy devices:</strong> If possible, switch off fans, AC,
                        or move away from traffic or crowded streets.
                    </li>
                    <li>
                        <strong>Speak clearly and steadily:</strong> Keep your volume constant and
                        avoid whispering one moment and shouting the next.
                    </li>
                    <li>
                        <strong>Use earphones with mic if needed:</strong> Even a basic earphone mic
                        can be better than the phone mic far away on a table.
                    </li>
                </ul>

                <p className="text-secondary">
                    When you combine good recording habits with AI processing, your final audio can
                    sound surprisingly close to “studio quality” even without expensive equipment.
                </p>

                <h3 className="fw-bold mt-4">
                    Why Clean Audio Increases Engagement
                </h3>

                <p className="text-secondary">
                    People can sometimes accept medium video quality, but they rarely tolerate bad
                    audio. If your voice is noisy, too low, or difficult to understand, viewers will
                    quickly leave your video or stop listening to your audio content. On the other
                    hand, clear, warm, and consistent audio builds trust. It makes your content feel
                    serious, well-prepared, and worth someone’s time.
                </p>

                <p className="text-secondary">
                    For content creators, this means more watch time, better retention, and higher
                    chances of getting likes, shares, and subscribers. For teachers and trainers, it
                    means students can actually focus on what you are saying instead of fighting
                    with their volume button. For professionals, clear audio improves your personal
                    brand and helps you communicate your ideas more effectively.
                </p>

                <p className="text-secondary">
                    This tool is built to make that improvement simple: upload → enhance → download.
                    You don’t need to install heavy software or learn audio engineering to get
                    better sound.
                </p>
            </section>

            {/* ========================= */}
            {/* FAQ SECTION               */}
            {/* ========================= */}
            <section className="mt-5 mb-5">
                <h2 className="fw-bold mb-3 text-dark">Frequently Asked Questions (FAQ)</h2>

                <div className="mb-3">
                    <h5 className="fw-bold">1. What types of audio files can I upload?</h5>
                    <p className="text-secondary">
                        You can upload most common audio formats such as MP3, WAV, M4A, AAC, and
                        others. The system automatically converts your file to a processing format
                        and then returns an enhanced WAV file for you to download.
                    </p>
                </div>

                <div className="mb-3">
                    <h5 className="fw-bold">2. Will this remove all background noise completely?</h5>
                    <p className="text-secondary">
                        The AI will significantly reduce constant background noise like fan sounds
                        or room hum. However, if the noise is extremely loud compared to your
                        voice, it may not disappear 100%. The goal is to make your voice much
                        clearer and more comfortable to listen to, not to create a completely
                        silent studio from a very noisy environment.
                    </p>
                </div>

                <div className="mb-3">
                    <h5 className="fw-bold">3. Is my audio stored on the server?</h5>
                    <p className="text-secondary">
                        The backend is designed to process your file, generate the enhanced version,
                        and then serve it back to you. In a production deployment, you can configure
                        it so temporary files are deleted after processing. For extra privacy, you
                        can host the backend on your own server or local machine.
                    </p>
                </div>

                <div className="mb-3">
                    <h5 className="fw-bold">4. Can I use the enhanced audio for YouTube or podcasts?</h5>
                    <p className="text-secondary">
                        Yes, you can use the enhanced audio for your YouTube videos, podcasts,
                        online courses, or any other platform. Just make sure your original content
                        follows the copyright rules of the platform where you upload it.
                    </p>
                </div>

                <div className="mb-3">
                    <h5 className="fw-bold">5. Will this affect the natural tone of my voice?</h5>
                    <p className="text-secondary">
                        The processing is designed to keep your voice natural while improving
                        clarity and reducing noise. Very aggressive enhancement on extremely noisy
                        audio may sometimes change the tone slightly, but for normal recordings the
                        goal is to keep your voice sounding like you—just cleaner and more
                        polished.
                    </p>
                </div>

                <div className="mb-3">
                    <h5 className="fw-bold">6. Do I need any special knowledge to use this tool?</h5>
                    <p className="text-secondary">
                        No. The interface is simple: upload your file, click “Enhance Audio”, and
                        then download the result. All the complex processing—noise reduction,
                        enhancement, loudness normalization, and limiting—is handled for you in the
                        background by AI-powered audio algorithms.
                    </p>

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
            </section>
        </div>
    );
}
