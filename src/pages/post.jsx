import { useState, useEffect } from "react";
import Loader from "../components/loader";

import { $_fetchSinglePost } from "../services";

export default function Post({ match }) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = match.params;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await $_fetchSinglePost(id);

        setPost(data);
        setLoading(false);
      } catch (err) {
        throw err;
      }
    })();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="container">
      <div className="font-bold mb-20" style={{ fontSize: "1.8rem" }}>
        {post.title}
      </div>

      <div>{post.body}</div>
    </div>
  );
}
