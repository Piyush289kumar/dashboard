import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { notificationData } from "../data/dummy";
import { Button } from ".";
import { useStateContext } from "../contexts/ContextProvider";

function Notification() {
  const { setIsClicked, currentColorMode } = useStateContext();

  return (
    <div style={{ zIndex: 9999999 }}>
      <div className="fixed top-0 right-0 w-full h-screen bg-half-transparent">
        <div className="w-96 bg-slate-100 dark:bg-zinc-700 rounded-xl fixed top-14 right-44 p-8">
          <div className="flex justify-between items-center">
            <p className="text-zinc-800 text-lg dark:text-gray-200 font-semibold">
              Notification
            </p>
            <button
              type="button"
              onClick={() => setIsClicked("notification")}
              className="text-xl rounded-full p-3 bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-200 hover:drop-shadow-xl"
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className="mt-5">
            {/* Notification Data */}
            {notificationData.map((item, idx) => (
              <div key={idx} className="border-b-1 border-color">
                <div className="flex gap-5 items-center mb-3 mt-3 cursor-pointer">
                  <img
                    src={item.avatar}
                    alt="Profile"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-zinc-800 text-md dark:text-gray-200 font-semibold">
                      {item.notificationText}
                    </p>
                    <p className="text-zinc-800 text-xs dark:text-gray-200 ">
                      {item.notificationSubText}
                    </p>
                    <p className="text-zinc-800 text-xs dark:text-gray-200 ">
                      {item.notificationTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Notification Data */}
          </div>

          <div className="mt-5 flex justify-center items-center">
            <Button
              color="white"
              bgColor={currentColorMode}
              text={"See all notification"}
              borderRadius={"10px"}
              width="full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
