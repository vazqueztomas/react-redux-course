import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPost,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import React, { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";
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

  let content = "";
  if (postsStatus === "loading") {
    content = <p>Loading..</p>;
  } else if (postsStatus === "succeeded") {
    content = posts.map((post) => (
      <PostsExcerpt key={Math.random()} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsErrors}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
