import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <textarea>new post</textarea> <button>add post</button>
      <div>
        <img
          src="https://hr-portal.ru/files/mini/ex-machina-recenzia11.jpg"
          alt="load"
        />
      </div>
      <div className={s.item}>Post1</div>
    </div>
  );
};
export default Post;
