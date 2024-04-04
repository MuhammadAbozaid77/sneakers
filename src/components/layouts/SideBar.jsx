//
//

import { heardeLinks } from "./links";

export default function SideBar() {
  return (
    <div>
      <ul>
        {heardeLinks.map((item, index) => (
          <li key={index} className="block border-b p-2">
            <span className="text-[20px] capitalize text-white">
              {item.link}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
