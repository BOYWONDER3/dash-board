import logo from "../assets/images/logo.svg";
import blue from "../assets/icons/blue.svg";
import happy from "../assets/images/happy.svg";
import { tabsLists } from "../constants";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close.svg";

export default function Home({ open, setOpen }) {

  
  function handleMenu() {
    setOpen((open) => !open);
  }

  return (
    <div
      className={`flex-col flex xl:flex-row xl:w-[351px]  ${
        open ? "fixed h-full z-10" : ""
      } `}
    >
    {/* <button className="" onClick={handleMenu}>
                {!open ? (
                  <img className="" src={menu} />
                ) : (
                  <img className="absolute " src={close} />
                )}
              </button>   */}
      <div
        className={`${
          open
            ? "bg-black bg-opacity-40 fixed w-full h-full top-0 left-0 z-10"
            : ""
        }`}
      ></div>

      <aside
        className={`border-r w-[351px] relative  bg-[#FCFBF7] pt-20 pb-20 xl:inline-block ${
          open ? "inline-block h-full absolute top-0  z-20" : "hidden"
        } `}
      >
        <div className="flex flex-col gap-16 px-20 ">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex gap-3">
            <img src={blue} alt="logo" />
            <p className="flex flex-col text-nowrap">
              <span className="text-base font-semibold">Uniqueideas</span>
              <span className="font-normal text-xs opacity-50">
                Creative Designer
              </span>
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-8">
              {tabsLists.map((item, i) => {
                return (
                  <li key={i} className="flex gap-2">
                    <img src={item.icon} />
                    <a href="">
                      <p
                        className={` text-base   ${
                          item.isActive
                            ? "font-semibold text-[#000000] "
                            : " text-[#514949] opacity-50 font-medium"
                        }`}
                      >
                        {item.title}
                      </p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-[200px] lg:w-full lg:flex justify-end pl-14 xl:px-3 pt-20 ">
          <img src={happy} />
        </div>
        <div className="flex pl-7 lg:flex-col xl:place-items-end xl:px-3 xl:gap-3 pt-5">
          <p className="text-center flex flex-col">
            <span className="text-lg font-bold">Invite Friends</span>
            <span className="font-normal text-sm">
              Get free month of premium content
            </span>
          </p>
        </div>
        <div className="pt-5 pl-20 flex md:justify-end pr-10">
          <button className="text-sm font-normal text-[#FFFFFF] bg-[#F26D0A] rounded-lg px-3 py-2    xl:text-base md:font-medium lg:rounded-xl lg:px-10 md:py-3">
            Get the Link
          </button>
        </div>
      </aside>
    </div>
  );
}
