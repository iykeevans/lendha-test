import { useState } from "react";
import { withRouter } from "react-router-dom";

import { $_createPost } from "../services";

function NewPost({ history, updatePost }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (inputValidator()) {
        setSubmitting(true);

        const { data } = await $_createPost({
          title,
          body: post,
        });

        updatePost(data);

        history.push("/");
      }
    } catch (err) {
      throw err;
    } finally {
      setSubmitting(false);
    }
  };

  const inputValidator = () => {
    if (!title || !post) return false;
    return true;
  };

  return (
    <div className="container">
      <div className="flex justify-center">
        <form
          className="flex flex-column p-10 bg-gray"
          style={{ border: "1px solid", width: "400px" }}
          onSubmit={handleSubmit}
        >
          <label className="flex flex-column mb-10">
            Title
            <input
              type="text"
              value={title}
              className="rounded border-0 "
              style={{ height: "40px" }}
              onChange={({ target }) => setTitle(target.value)}
            />
          </label>

          <label className="flex flex-column mb-20">
            Body
            <input
              type="text"
              value={post}
              className="rounded border-0"
              style={{ height: "40px" }}
              onChange={({ target }) => setPost(target.value)}
            />
          </label>

          <button
            disabled={!title || !post}
            type="submit"
            style={{ height: "40px" }}
          >
            {submitting ? "submitting..." : "submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(NewPost);
