//
//
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../layouts/Logo";
import SideBar from "./SideBar";
import HeaderLinks from "./HeaderLinks";
import { useState } from "react";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  return (
    <div className="h-[80px] border bg-slate-300 flex justify-between items-center relative px-10">
      <div>
        {/* {" "} */}
        <Logo />
      </div>

      <div className="md:block hidden" onClick={toggleSidebar}>
        <HeaderLinks />
      </div>
      <div className="md:hidden block" onClick={toggleSidebar}>
        <RxHamburgerMenu size={30} />
      </div>

      <div
        className={`md:hidden block fixed w-[300px] bg-black/80 top-0 h-[100vh] transition-all duration-500 ${
          showSidebar ? "left-0" : "-left-[300px]"
        }`}
      >
        <SideBar />
      </div>
    </div>
  );
}
