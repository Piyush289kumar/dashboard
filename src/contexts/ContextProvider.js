import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initializationState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initializationState);
  const [screenSize, setScreenSize] = useState(null);
  const [currentThemeMode, setCurrentThemeMode] = useState("Dark");
  const [currentColorMode, setCurrentColorMode] = useState("#7352FF");
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const setMode = (e) => {
    setCurrentThemeMode(e.target.value);
    setIsThemeMenuOpen(false);
    localStorage.setItem("themeMode", e.target.value);
  };
  const setColor = (color) => {
    setCurrentColorMode(color);
    setIsThemeMenuOpen(false);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initializationState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        initializationState,
        screenSize,
        setScreenSize,
        currentThemeMode,
        setCurrentThemeMode,
        currentColorMode,
        setCurrentColorMode,
        isThemeMenuOpen,
        setIsThemeMenuOpen,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
