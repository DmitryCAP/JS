import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
    return(
    <div className={s.profile}>
        <div >
          <img
            src="https://img.zoneofgames.ru/news/2018/12/03/131729-4ww9ag6ql61z.jpg"
            alt="load"
          />
        </div>
        <div>AVA+DESCRIPTION</div>
        <div>Posts</div>
        <div>My posts</div>
        <div>New post</div>
        <div> post 1</div>
        <div> post 2</div>
      </div>)
};
export default Profile;