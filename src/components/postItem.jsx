import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo.svg";

export default function PostItem({ post }) {
  return (
    <div className="flex items-center post rounded mb-10 p-10">
      <img src={Logo} alt="logo" className="App-logo" />
      <div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.8rem",
            marginBottom: "5px",
          }}
        >
          {post.title}
        </div>

        <div className="mb-20">{post.body}</div>

        <Link
          to={`/posts/${post.id}`}
          className="post font-bold bg-gray text-decoration-none text-black"
        >
          View
        </Link>
      </div>
    </div>
  );
}
