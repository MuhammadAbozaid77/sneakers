import { useState } from "react";
import { heardeLinks } from "./links";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

export default function HeaderLinks() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="">
      <ul className="flex items-center">
        {heardeLinks.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={`/${item.linkDropDown ? "" : item.path}`}
              className="flex justify-center items-center gap-2 tracking-widest px-4 py-2 text-[14px] capitalize text-gray-600 hover:text-black font-medium"
            >
              {item.link}

              {item.linkDropDown && (
                <span>
                  <IoChevronDown />
                </span>
              )}
            </Link>
            {activeDropdown === index && item.linkDropDown && (
              <div className="z-30 absolute top-full left-0 w-[250px] border-gray-300 p-1 shadow-lg bg-white">
                <ul>
                  {item.linkDropDown.map((el, index) => (
                    <li key={index}>
                      <Link
                        to={`/${el.path}`}
                        className="block p-2 text-gray-800 hover:bg-gray-100/50 rounded capitalize text-[14px]"
                      >
                        {el.dropdownLink}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
