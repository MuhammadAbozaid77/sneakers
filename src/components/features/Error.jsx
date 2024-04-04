//
import { TbFaceIdError } from "react-icons/tb";
import { MdError } from "react-icons/md";

export default function Error() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <TbFaceIdError size={200} className="text-blue-500" />
      <div className="flex justify-between items-center flex-col">
        <span className="text-blue-500 text-[50px] font-bold"> 404 </span>
        <span className="text-[20px]"> Page Not Found</span>
      </div>
    </div>
  );
}
