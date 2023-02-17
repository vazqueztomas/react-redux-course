import { useSelector } from "react-redux";
import { selectAllPost } from "./postsSlice";
import React from "react";

const PostsList = () => {
  const posts = useSelector(selectAllPost);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
