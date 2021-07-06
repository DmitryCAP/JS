import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return(
    <div className={s.header}>
        <header>
          <div>
            <img
              src="https://cdn.postupi.online/images/images823/05/528.jpg"
              alt="load"
            />
            <a>Develop technologies together!</a>
          </div>
        </header>
      </div>)
};

export default Header;