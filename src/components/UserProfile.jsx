import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { userProfileData } from "../data/dummy";
import { Button } from ".";
import { useStateContext } from "../contexts/ContextProvider";
function UserProfile() {
  const { setIsClicked, currentColorMode } = useStateContext();

  return (
    <div style={{ zIndex: 9999999 }}>
      <div className="fixed top-0 right-0 w-full h-screen bg-half-transparent">
        <div className="w-96 bg-slate-100 dark:bg-zinc-700 rounded-xl fixed top-14 right-12 p-8">
          <div className="flex justify-between items-center">
            <p className="text-zinc-800 text-lg dark:text-gray-200 font-semibold">
              User Profile
            </p>
            <button
              type="button"
              onClick={() => setIsClicked("userProfile")}
              className="text-xl rounded-full p-3 bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-200 hover:drop-shadow-xl"
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className="mt-5">
            <div className="flex gap-5 items-center mb-14 mt-3 cursor-pointer">
              <img
                src={"https://avatars.githubusercontent.com/u/94155141?v=4"}
                alt="Profile"
                className="w-32 h-32 rounded-full border-[3px]"
                style={{ borderColor: currentColorMode }}
              />
              <div className="flex flex-col">
                <p className="text-zinc-800 text-xl dark:text-gray-200 font-semibold pb-2">
                  Piyush Kumar
                </p>
                <p className="text-zinc-800 text-sm dark:text-gray-300 font-semibold">
                  Administator
                </p>
                <p className="text-zinc-800 text-sm dark:text-gray-300  font-semibold">
                  info@gmail.com
                </p>
              </div>
            </div>

            {/* Notification Data */}
            {userProfileData.map((item, idx) => (
              <div
                key={idx}
                className="border-b-1 border-color dark:border-zinc-500"
              >
                <div className="flex gap-5 items-center my-1 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800  rounded-md px-2 py-3">
                  <p
                    style={{ color: item.iconColor, background: item.iconBg }}
                    className="p-3 rounded-full"
                  >
                    {item.icon}
                  </p>
                  <div className="flex flex-col">
                    <p className="text-zinc-800 text-md dark:text-gray-200 font-semibold">
                      {item.title}
                    </p>
                    <p className="text-zinc-800 text-xs dark:text-gray-200 ">
                      {item.desc}
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
              text={"Logout"}
              borderRadius={"10px"}
              width="full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
