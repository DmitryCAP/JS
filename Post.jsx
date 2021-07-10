import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img
          src="https://hr-portal.ru/files/mini/ex-machina-recenzia11.jpg"
          alt="load"
        />
      </div>
      <div className={s.item}>
        {props.message}
        <div>
          <span>like:{props.like}</span>
        </div>
      </div>
    </div>
  );
};
export default Post;
