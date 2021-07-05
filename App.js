import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="header">
        <header>
          <img
            src="http://retail-loyalty.org/upload/iblock/442/d54fd5e11ad3f72eea94abd2570037c2.jpg"
            alt="load"
          />
        </header>
      </div>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>Projects</a>
        </div>
        <div>
          <a>Music</a>
        </div>
      </nav>

      <div className="content">
        <div>AVA+DESCRIPTION</div>
        <div>Posts</div>
        <div>My posts</div>
        <div>New post</div>
        <div> post 1</div>
        <div> post 2</div>
      </div>
    </div>
  );
};

export default App;
