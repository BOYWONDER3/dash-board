import Courses from "./section/Courses";
import Home from "./section/Home";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);


  return (
    <div className="flex flex-col lg:flex-row w-full px-5 md:px-10 lg:px-0 ">
      <Home open={open} setOpen={setOpen} />
      <Courses open={open} setOpen={setOpen} />
    </div>
  );
}