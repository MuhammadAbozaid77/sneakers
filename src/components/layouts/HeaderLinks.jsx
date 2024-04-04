import { useState } from "react";
import { heardeLinks } from "./links";
import { Link } from "react-router-dom";

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
              to={`/${item.path}`}
              className="block px-4 py-2 text-[20px] capitalize text-blue-500 hover:text-blue-700"
            >
              {item.link}
            </Link>
            {activeDropdown === index && item.linkDropDown && (
              <div className="absolute top-full left-0 bg-white border border-gray-300 p-2 rounded shadow-lg">
                <ul>
                  {item.linkDropDown.map((el, index) => (
                    <li key={index}>
                      <Link
                        to={`/${el.dropdownLink}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
