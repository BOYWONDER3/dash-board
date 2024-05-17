import logo from "../assets/images/logo.svg";
import blue from "../assets/icons/blue.svg";

import db from "../assets/icons/db.svg";
import course from "../assets/icons/course.svg";
import down from "../assets/icons/down.svg";
import rec from "../assets/icons/rec.svg";
import acc from "../assets/icons/acc.svg";
import search from "../assets/icons/search.svg";
import happy from "../assets/images/happy.svg";
import box1 from "../assets/images/box1.svg";
import box2 from "../assets/images/box2.svg";
import box3 from "../assets/images/box3.svg";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close.svg";
import { useState } from "react";

export default function Home() {

  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen((open) => !open);
  }

  return (
    <main className="flex-col flex md:flex-row">
      <aside className={`border-r w-[600px] md:w-[450px] relative  bg-[#FCFBF7] pt-20 pb-20 md:inline-block ${open ? 'inline-block' : 'hidden'} `}>
        <div className="flex flex-col gap-16 px-20 ">
          <div>
            <img src={logo} alt="logo" /> 
          </div>
          <div className="flex gap-3">
            <img src={blue} alt="logo" />
            <p className="flex flex-col text-nowrap">
              <span className="text-base font-semibold">Uniqueideas</span>
              <span className="font-normal text-xs">Creative Designer</span>
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-8">
              <li className="flex gap-2 text-base font-medium text-[#514949]">
                <img src={db} />
                Dashboard
              </li>
              <li className="flex gap-2 text-base font-semibold">
                <img src={course} />
                My Courses
              </li>
              <li className="flex gap-2 text-base font-medium text-[#514949]">
                <img src={down} />
                Downloads
              </li>
              <li className="flex gap-2 text-base font-medium text-[#514949]">
                <img src={rec} />
                Recommended
              </li>
              <li className="flex gap-2 text-base font-medium text-[#514949]">
                <img src={acc} />
                My Account
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[200px] md:w-full md:flex justify-end pl-14 md:px-3 pt-20 ">
          <img src={happy} />
        </div>
        <div className="flex pl-7 md:flex-col md:place-items-end md:px-3 md:gap-3 pt-5">
          <p className="text-center flex flex-col">
            <span className="text-lg font-bold">Invite Friends</span>
            <span className="font-normal text-sm">
              Get free month of premium content
            </span>
          </p>
        </div>
        <div className="pt-5 pl-20 flex md:justify-end pr-10">
          <button className="text-sm font-normal text-[#FFFFFF] bg-[#F26D0A] rounded-lg px-3 py-2    md:text-base md:font-medium md:rounded-xl md:px-10 md:py-3">
            Get the Link
          </button>
{/* 

          <div className="flex justify-between w-full">
              <img src={bell} />
              <div className="rounded-xl bg-white gap-2 flex justify-center items-center px-1 py-3 pr-5">
                <img src={search} />
                <p className="font-bold text-sm text-[#514949]">
                  Search for courses
                </p>
              </div>
            </div>           */}



        </div>
      </aside>
      {/* 2nd section  */}
     
    </main>
  );
}
