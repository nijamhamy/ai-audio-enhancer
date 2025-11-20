import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// Lazy pages
const Home = lazy(() => import("./pages/Home"));
const Posts = lazy(() => import("./pages/Posts"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const DMCA = lazy(() => import("./pages/DMCA"));
const Contact = lazy(() => import("./pages/Contact"));
const SinglePost = lazy(() => import("./pages/SinglePost")); // <-- IMPORTANT

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="main-content">
          <Suspense
            fallback={
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: "50vh" }}
              >
                <div className="spinner-border text-primary"></div>
                <p className="mt-3 fw-bold text-secondary">Loading...</p>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/dmca" element={<DMCA />} />
              <Route path="/contact" element={<Contact />} />

              {/* Single Post Page */}
              <Route path="/posts/:id" element={<SinglePost />} />
            </Routes>
          </Suspense>
        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
