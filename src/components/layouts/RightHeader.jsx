import { Link } from "react-router-dom";
import { BsCart, BsHeart } from "react-icons/bs";

//
export default function RightHeader() {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="relative">
        <span className="absolute right-[-10px] top-[-10px] w-[18px] h-[18px] rounded-full text-white bg-red-700 text-[10px] flex justify-center items-center">
          11
        </span>
        <Link to="">
          <BsHeart size={22} />
        </Link>
      </div>
      <div className="relative">
        <span className="absolute right-[-10px] top-[-10px] w-[18px] h-[18px] rounded-full text-white bg-red-700 text-[10px] flex justify-center items-center">
          11
        </span>
        <Link to="">
          <BsCart size={22} />
        </Link>
      </div>
    </div>
  );
}
