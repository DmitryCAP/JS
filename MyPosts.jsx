import React from "react";
import NewMessage from "../NewMessage/NewMessage";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        <NewMessage />
      </div>
      <div>
        <Post message="How are you?" like="15" />
        <Post message="very well." like="20" />
      </div>
    </div>
  );
};
export default MyPosts;
