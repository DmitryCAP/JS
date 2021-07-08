import React from "react";
import MyPosts from "./../Profile/MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img
          src="https://img.zoneofgames.ru/news/2018/12/03/131729-4ww9ag6ql61z.jpg"
          alt="load"
        />

        <MyPosts />
      </div>
    </div>
  );
};
export default Profile;
