import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const $_fetchAllPosts = () => {
  return client.get("/posts");
};

export const $_fetchSinglePost = (identifier) => {
  console.log("id", identifier);
  return client.get(`/posts/${identifier}`);
};

export const $_createPost = (data) => {
  return client.post("/posts", data);
};
