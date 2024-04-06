//
import { TbFaceIdError } from "react-icons/tb";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center flex-col">
        <div className="text-gray-600 text-[150px] font-bold">404</div>
        <div className="flex justify-between items-center">
          <div>
            <TbFaceIdError size={120} className="text-gray-600" />
          </div>
          <div className="border-l-gray-600 border-l-[5px] px-4 flex justify-center items-center flex-col">
            <Link to="home">
              <span className="cursor-pointer text-[20px] font-bold w-[50px] h-[50px] rounded-[5px] flex justify-center items-center border bg-black text-white">
                <FaChevronLeft />
              </span>
            </Link>
            <span className="text-gray-600 text-[20px] font-bold">
              Back To Home
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
