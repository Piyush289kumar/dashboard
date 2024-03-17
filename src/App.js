import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Navbar,
  Sidebar,
  ThemeSettings,
  Notification,
  Chat,
} from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
 
  Customers,
  Kanban,
  Area,
 
  ColorPicker,
 
  Editor,
  Line,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";
import LocomotiveScroll from "locomotive-scroll";
import "./App.css";

// const locomotiveScroll = new LocomotiveScroll();

function App() {
  const {
    activeMenu,
    currentThemeMode,
    currentColorMode,
    isThemeMenuOpen,
    setIsThemeMenuOpen,
    isClicked,
  } = useStateContext();

  useEffect(() => {
    if (currentThemeMode === "Dark") {
      document.body.style.backgroundColor = "#20232A";
    } else {
      document.body.style.backgroundColor = "#FAFBFB";
    }
  }, [currentThemeMode]);

  return (
    <div className={currentThemeMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {isClicked.notification && <Notification />}
          {isClicked.chat && <Chat />}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full text-white"
                style={{ background: currentColorMode }}
                onClick={() => setIsThemeMenuOpen(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {isThemeMenuOpen && <ThemeSettings />}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charsts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                {/* <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
