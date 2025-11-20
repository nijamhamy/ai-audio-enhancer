import React from "react";
import { useParams } from "react-router-dom";
import fullArticles from "../postsData";
import "./singlePost.css";


export default function SinglePost() {
    const { id } = useParams();
    const post = fullArticles[id];

    if (!post) {
        return (
            <h2 className="text-center mt-5 pt-5 text-light">
                Post not found
            </h2>
        );
    }

    return (
        <div className="container mt-5 pt-5 text-light" style={{ maxWidth: "900px" }}>
            <h1 className="fw-bold mb-3"

                style={{ color: "#000000ff" }}>{post.title}</h1>
            <small className="text-secondary">{post.date}</small>

            <hr className="border-secondary" />

            {/* IMPORTANT: RENDER HTML SAFELY */}
            <div
                className="mt-4 fs-5 single-post-content"
                style={{ color: "#393737ff", lineHeight: "1.8" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
        </div>
    );
}
