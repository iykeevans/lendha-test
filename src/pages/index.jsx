import PostItem from "../components/postItem";
import Loader from "../components/loader";

export default function Index({ posts, loading }) {
  if (loading) return <Loader />;

  return (
    <div className="container">
      {posts.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}
    </div>
  );
}
