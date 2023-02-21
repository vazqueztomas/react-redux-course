import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPost,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import React, { useEffect } from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPost);
  const postsStatus = useSelector(getPostsStatus);
  const postsErrors = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
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
