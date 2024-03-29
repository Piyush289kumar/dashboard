import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BsCheck } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

function ThemeSettings() {
  const {
    setMode,
    setColor,
    currentThemeMode,
    currentColorMode,
    setIsThemeMenuOpen,
  } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item  top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setIsThemeMenuOpen(false)}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Mode</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value={"Light"}
              className="cursor-pointer"
              onChange={setMode}
              checked={currentThemeMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light Mode
            </label>
          </div>

          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value={"Dark"}
              className="cursor-pointer"
              onChange={setMode}
              checked={currentThemeMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark Mode
            </label>
          </div>
        </div>

        <div className="flex flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Color Mode</p>
          <div className="flex gap-3">
            {themeColors.map((item, idx) => (
              <TooltipComponent
                key={idx}
                content={item.name}
                position="TopCenter"
              >
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColorMode ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
