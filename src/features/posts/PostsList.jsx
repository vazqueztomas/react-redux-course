import { useSelector } from "react-redux";
import { selectAllPost } from "./postsSlice";
import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPost);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
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
