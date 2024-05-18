import bell from "../assets/icons/bell.svg";
import cup from "../assets/icons/cup.svg";
import bar from "../assets/icons/bar.svg";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close.svg";
import search from "../assets/icons/search.svg";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import { boxCourses, courseTabs, starBox, writeUp } from "../constants";

export default function Courses() {
  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen((open) => !open);
  }

  return (
    <section className="w-full">
      <div className="flex-col flex md:flex-row">
        <aside className="bg-[#FFFFFF] lg:border-r  lg:w-1/2 pt-20 px-4 lg:px-16">
          <div className="flex flex-col gap-11">
            <div className="md:hidden  flex justify-between">
              <div className={` ${!open ? "inline-block" : "hidden"} `}>
                <div>
                  <img src={logo} alt="logo" />{" "}
                </div>
              </div>
              <button className="" onClick={handleMenu}>
                {!open ? (
                  <img className="" src={menu} />
                ) : (
                  <img className="absolute top-16 right-5" src={close} />
                )}
              </button>
            </div>
            <h1 className="text-2xl font-medium md:text-5xl md:font-bold">
              My Courses
            </h1>
            <p className="font-normal text-lg">
              Welcome back Unique, take your next class
            </p>
          </div>
          <ul className="flex gap-7 pt-9 pb-12">
            {courseTabs.map((item, i) => {
              return (
                <li
                  key={i}
                  className={` ${
                    item.isActive
                      ? "text-[#000000] text-base font-bold border-b-4 border-[#F26D0A] pb-1"
                      : "opacity-50 text-base font-normal text-[#4b4747]"
                  }`}
                >
                  <a href="">{item.title}</a>
                </li>
              );
            })}
          </ul>
          {/* box  */}
          <div className="flex flex-col gap-7">
            {boxCourses.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`flex rounded-lg px-4 py-4 gap-5 ${
                    item.isActive ? "bg-[#F6EFFF]" : "bg-[#E6F4FF]"
                  }`}
                >
                  <div className="bg-white relative top-10 md:top-0 h-[100px] flex items-center justify-center md:h-[150px] w-[126px] rounded-xl">
                    <img src={item.img} />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                      <div className="rounded-xl bg-[#FFFFFF] text-[#F26D0A] text-nowrap text-xs font-normal w-[105px]  text-center">
                        <p className="px-3 py-2">{item.p}</p>
                      </div>
                      <p className=" text-[#3D42DD] font-bold text-lg">
                        <span>{item.span}</span>
                      </p>
                    </div>
                    <div className="flex gap-3 justify-between">
                      <span className="flex gap-1 justify-center items-center">
                        <img
                          className="bg-white rounded-full"
                          src={item.icon}
                        />
                        <p className="text-nowrap text-xs text-[#3D42DD] font-normal">
                          {item.title}
                        </p>
                      </span>
                      <span className="flex gap-1 items-center justify-center">
                        <img
                          className="bg-white rounded-full"
                          src={item.icon2}
                        />
                        <p className="text-nowrap text-xs text-[#3D42DD] font-normal">
                          {item.title2}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* box */}
          </div>
        </aside>
        {/* next side */}
        <aside className="bg-[#FCFBF7]  px-4 lg:px-20 pt-20 lg:w-1/2 pb-20">
          <div className="flex justify-between w-full">
            <img src={bell} />
            <div className="rounded-xl bg-white gap-2 flex justify-center items-center px-1 py-3 pr-5">
              <img src={search} />
              <p className=" opacity-50 font-bold text-sm text-[#514949]">
                Search for courses
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-10">
            <h1 className="font-bold text-2xl">Milestones</h1>
            <div className="flex gap-5  bg-[#FFFFFF] w-ful md:w-[365px] py-3 rounded-xl pl-3">
              <img src={cup} />
              <div className="flex flex-col pt-8 gap-1">
                <p className="font-bold text-lg">Goals</p>
                <div className="flex gap-3">
                  <img className="w-[100px] md:w-full" src={bar} />
                  <p className="font-bold text-lg">82%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 flex flex-col ">
            <h1 className="font-bold text-lg pb-5">
              You have successfully completed
            </h1>
            {/* startboxstar */}
            {starBox.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex  justify-between bg-white border-b rounded-t-lg px-5 py-5 items-center"
                >
                  <div className="flex justify-center items-center gap-8">
                    <div className="">
                      <img
                        className={` py-3 px-3 rounded-full ${
                          item.isActive ? "bg-[#F26D0A]" : "bg-[#3D42DD]"
                        } 
                        }`}
                        src={item.img}
                      />
                    </div>
                    <p className="flex justify-center flex-col">
                      <span className="text-lg font-bold">{item.span}</span>
                      <span className="text-xs font-bold text-[#514949] opacity-50">
                        {item.text}
                      </span>
                    </p>
                  </div>
                  <div>
                    <img src={item.icon} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-14 flex ">
            <h1 className="text-lg font-bold">Amazing Performance in</h1>
          </div>
          {writeUp.map((item) => {
            return (
              <>
                <div className="pt-5 flex gap-3">
                  <img
                    className="flex items-start justify-start"
                    src={item.icon}
                  />
                  <p className="font-bold text-2xl">{item.title}</p>
                </div>
                <p className="pl-6">
                  <span className="text-sm font-normal">{item.text}</span>
                </p>
              </>
            );
          })}
        </aside>
      </div>
    </section>
  );
}