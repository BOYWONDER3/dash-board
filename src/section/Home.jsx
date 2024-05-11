import logo from "../assets/images/logo.svg";
import blue from "../assets/icons/blue.svg";
import grad from "../assets/icons/grad.svg";
import time from "../assets/icons/time.svg";
import bell from "../assets/icons/bell.svg";
import cup from "../assets/icons/cup.svg";
import bar from "../assets/icons/bar.svg";
import dot from "../assets/icons/dot.svg";
import star from "../assets/icons/star.svg";
import next from "../assets/icons/next.svg";
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

export default function Home() {
  return (
    <main className="flex">
      <section className="border-r w-[351px] bg-[#FCFBF7] pt-20 pb-20">
        <div className="flex flex-col gap-16 px-20">
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
        <div className="flex justify-end px-3 pt-20">
          <img src={happy} />
        </div>
        <div className="flex flex-col place-items-end px-3 gap-3 pt-5">
          <p className="text-center flex flex-col">
            <span className="text-lg font-bold">Invite Friends</span>
            <span className="font-normal text-sm">
              Get free month of premium content
            </span>
          </p>
        </div>
        <div className="pt-5 flex justify-end pr-10">
          <button className="text-base font-medium text-[#FFFFFF] bg-[#F26D0A] rounded-xl px-10 py-3">
            Get the Link
          </button>
        </div>
      </section>
      {/* 2nd section  */}
      <section>
        <div className="flex w-full">
          <aside className="bg-[#FFFFFF] border-r pt-20 px-16">
            <div className="flex flex-col gap-11">
              <h1 className="text-5xl font-bold">My Courses</h1>
              <p className="font-normal text-lg">
                Welcome back Unique, take your next class
              </p>
            </div>
            <ul className="flex gap-7 pt-9 pb-12">
              <li className="text-[#000000] text-base font-bold border-b-4 border-[#F26D0A] pb-1">
                Design
              </li>
              <li className="text-base font-normal text-[#4b4747]">HTML</li>
              <li className="text-base font-normal text-[#4b4747]">CSS</li>
              <li className="text-base font-normal text-[#4b4747]">
                Javascript
              </li>
            </ul>
            <div className="flex flex-col gap-7">
            <div className="flex bg-[#E6F4FF] rounded-lg px-4 py-4 gap-5">
              <div className="bg-white w-[126px] rounded-xl">
                <img src={box1} />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <div className="rounded-xl bg-[#FFFFFF] text-[#F26D0A] text-nowrap text-xs font-normal w-[105px]  text-center">
                    <p className="px-3 py-2">User Interface</p>
                  </div>
                  <p className="flex flex-col text-[#3D42DD] font-bold text-lg">
                    <span>Introduction to User Interface</span>
                    <span>Design</span>
                  </p>
                </div>
                <div className="flex gap-3 justify-between">
                  <span className="flex gap-1 justify-center items-center">
                    <img className="bg-white rounded-full" src={grad} />
                    <p className="text-nowrap text-xs text-[#3D42DD] font-normal">
                      University of Minnesota
                    </p>
                  </span>
                  <span className="flex gap-1 items-center justify-center">
                    <img className="bg-white rounded-full" src={time} />
                    <p className="text-nowrap text-xs text-[#3D42DD] font-normal">
                      5h 40m left
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex bg-[#E6F4FF] rounded-lg px-4 py-4 gap-5">
              <div className="bg-white w-[126px] rounded-xl">
                <img src={box2} />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <div className="rounded-xl bg-[#FFFFFF] text-[#F26D0A] text-nowrap text-xs font-normal w-[105px]  text-center">
                    <p className="px-3 py-2">User Interface</p>
                  </div>
                  <p className="flex flex-col text-[#3D42DD] font-bold text-lg">
                    <span>Introduction to User Interface</span>
                    <span>Design</span>
                  </p>
                </div>
                <div className="flex gap-3 justify-between">
                  <span className="flex gap-1 justify-center items-center">
                    <img className="bg-white rounded-full" src={grad} />
                    <p className="text-nowrap text-xs text-[#3D42DD] font-normal">
                      University of Minnesota
                    </p>
                  </span>
                  <span className="flex gap-1 items-center justify-center">
                    <img className="bg-white rounded-full" src={time} />
                    <p className="text-nowrap text-xs text-[#3D42DD] font-normal">
                      5h 40m left
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex bg-[#E6F4FF] rounded-lg px-4 py-4 gap-5">
              <div className="bg-white w-[126px] rounded-xl">
                <img src={box3} />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <div className="rounded-xl bg-[#FFFFFF] text-[#F26D0A] text-nowrap text-xs font-normal w-[105px]  text-center">
                    <p className="px-3 py-2">User Interface</p>
                  </div>
                  <p className="flex flex-col text-[#3D42DD] font-bold text-lg">
                    <span>Introduction to User Interface</span>
                    <span>Design</span>
                  </p>
                </div>
                <div className="flex gap-3 justify-between">
                  <span className="flex gap-1 justify-center items-center">
                    <img className="bg-white rounded-full" src={grad} />
                    <p className="text-nowrap text-xs text-[#3D42DD] font-normal">
                      University of Minnesota
                    </p>
                  </span>
                  <span className="flex gap-1 items-center justify-center">
                    <img className="bg-white rounded-full" src={time} />
                    <p className="text-nowrap text-xs text-[#3D42DD] font-normal">
                      5h 40m left
                    </p>
                  </span>
                </div>
              </div>
            </div>
            </div>
          </aside>
          {/* next side */}
          <aside className="bg-[#FCFBF7] px-20 pt-20 w-[589px] pb-20">
            <div className="flex justify-between">
              <img src={bell} />
              <div className="rounded-xl bg-white gap-2 flex justify-center items-center px-1 py-3 pr-5">
                <img src={search} />
                <p className="font-bold text-sm text-[#514949]">Search for courses</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-10">
              <h1 className="font-bold text-2xl">Milestones</h1>
              <div className="flex gap-5 bg-[#FFFFFF] w-[365px] py-3 rounded-xl pl-3">
                <img src={cup} />
                <div className="flex flex-col pt-8 gap-1">
                  <p className="font-bold text-lg">Goals</p>
                  <div className="flex gap-3">
                    <img src={bar} />
                    <p className="font-bold text-lg">82%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10 flex flex-col  gap-5">
              <h1 className="font-bold text-lg">You have successfully completed</h1>
              <div className="flex justify-between bg-white border-b rounded-t-lg px-5 py-5 items-center">
                <div className="flex justify-center items-center gap-8">
                  <div className="">
                    <img
                      className="bg-[#3D42DD] py-3 px-3 rounded-full"
                      src={star}
                    />
                  </div>
                  <p className="flex justify-center flex-col gap-0">
                    <span className="text-lg font-bold">100</span>
                    <span className="text-xs font-bold">Tutorials</span>
                  </p>
                </div>
                <div>
                  <img src={next} />
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-white border-b rounded-t-lg px-5 py-5 items-center">
              <div className="flex justify-center items-center gap-8">
                <div className="">
                  <img
                    className="bg-[#3D42DD] py-3 px-3 rounded-full"
                    src={star}
                  />
                </div>
                <p className="flex justify-center flex-col gap-0">
                  <span className="text-lg font-bold">100</span>
                  <span className="text-xs font-bold">Tutorials</span>
                </p>
              </div>
              <div>
                <img src={next} />
              </div>
            </div>
            <div className="flex justify-between bg-white  rounded-t-lg px-5 py-5 items-center">
              <div className="flex justify-center items-center gap-8">
                <div className="">
                  <img
                    className="bg-[#3D42DD] py-3 px-3 rounded-full"
                    src={star}
                  />
                </div>
                <p className="flex justify-center flex-col gap-0">
                  <span className="text-lg font-bold">100</span>
                  <span className="text-xs font-bold">Tutorials</span>
                </p>
              </div>
              <div>
                <img src={next} />
              </div>
            </div>
            <div className="pt-14 flex ">
              <h1 className="text-lg font-bold">Amazing Performance in</h1>
            </div>
            <div className="pt-5 flex gap-3">
              <img className="flex items-start justify-start" src={dot} />
              <p className="font-bold text-2xl">Illustration Design</p>
            </div>
            <p className="pl-6">
              <span className="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </p>
            <div className="pt-5 flex gap-3">
              <img className="flex items-start justify-start" src={dot} />
              <p className="font-bold text-2xl">Illustration Design</p>
            </div>
            <p className="pl-6">
              <span className="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}