import React from "react";
import s from "./../NewMessage/NewMessage.module.css";

const NewMessage = () => {
  return (
    <div>
      <div className={s}>
        <textarea value="input message">input message</textarea>{" "}
        <button>add post</button>
      </div>
    </div>
  );
};

export default NewMessage;
