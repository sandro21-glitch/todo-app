import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTodosContext } from "../TodoContext";
const ThemeControl = () => {
  const { setLightMode, lightMode } = useTodosContext();
  return (
    <header className="themes">
      <h2 className="header-text">Todo</h2>
      {lightMode ? (
        <BsFillMoonFill
          className="theme-switcher"
          onClick={() => setLightMode(!lightMode)}
        />
      ) : (
        <BsFillSunFill
          className="theme-switcher"
          onClick={() => setLightMode(!lightMode)}
        />
      )}
    </header>
  );
};

export default ThemeControl;
