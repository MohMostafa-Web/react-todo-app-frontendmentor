import { useEffect } from "react";
import SunIcon from "./../../icon-sun.svg";
import MoonIcon from "./../../icon-moon.svg";
import "./Header.css";

const Header = ({ mode, setMode }) => {
  /* using useEffect() to update item "mode-theme" in local storage if state "mode" changed */
  useEffect(() => {
    localStorage.setItem("mode-theme", mode);
  }, [mode]);

  return (
    <header>
      <h1 className="logo">todo</h1>
      <img
        className={mode === "dark" ? "available" : undefined}
        src={SunIcon}
        data-theme="light"
        alt="icon-sun"
        onClick={() => setMode("light")}
      />
      <img
        className={mode === "light" ? "available" : undefined}
        src={MoonIcon}
        data-theme="dark"
        alt="icon-moon"
        onClick={() => setMode("dark")}
      />
    </header>
  );
};

export default Header;
