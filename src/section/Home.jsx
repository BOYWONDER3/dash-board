import logo from "../assets/images/logo.svg";
import blue from "../assets/icons/blue.svg";
import course from "../assets/icons/course.svg";
import happy from "../assets/images/happy.svg";
import { tabsLists } from "../constants";

export default function Home({open}) {

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
              <li className="flex gap-2 text-base font-semibold">
                <img src={course} />
                My Courses
              </li>
              {tabsLists.map((item) =>{
                return (
                  <li key={item.key} className="  opacity-50 flex gap-2 text-base font-medium text-[#514949]">
                <img src={item.icon} />
                <p>{item.title}</p>
              </li>
                )
              })}
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
        </div>
      </aside>
    </main>
  );
}
