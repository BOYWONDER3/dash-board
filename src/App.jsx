import Courses from "./section/Courses";
import Home from "./section/Home";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row ">
      <Home />
      <Courses />
    </div>
  );
}
