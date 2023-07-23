import { useState, useEffect } from "react";
import Logo from "../images/logo.png";

export const Header = () => {
  const [theme, setTheme] = useState("medium");

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // useEffect(() => {
  //   localStorage.setItem("theme", JSON.stringify(theme));
  // }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="taskmate logo" />
        <span> Taskmate </span>
      </div>

      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "light activeTheme" : "light"}
        >
          {" "}
        </span>
        <span
          onClick={() => setTheme("medium")}
          className={theme === "medium" ? "medium activeTheme" : "medium"}
        >
          {" "}
        </span>
        <span
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "dark activeTheme" : "dark"}
        >
          {" "}
        </span>
        <span
          onClick={() => setTheme("gradientOne")}
          className={
            theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"
          }
        >
          {" "}
        </span>
        <span
          onClick={() => setTheme("gradientTwo")}
          className={
            theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"
          }
        >
          {" "}
        </span>
        <span
          onClick={() => setTheme("gradientThree")}
          className={
            theme === "gradientThree"
              ? "gradientThree activeTheme"
              : "gradientThree"
          }
        >
          {" "}
        </span>
      </div>
    </header>
  );
};
