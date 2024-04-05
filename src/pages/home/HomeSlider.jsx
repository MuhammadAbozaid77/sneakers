//
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";

const imagePath = [pic1, pic2, pic3];

export default function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handelNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagePath.length - 1 : prevIndex - 1
    );
  };
  const handelPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagePath.length - 1 ? 0 : prevIndex + 1
    );
  };
  // useEffect(() => {
  //   const intervalId = setInterval(handelNext, 4000);

  //   return () => clearInterval(intervalId);
  // }, [currentIndex]);
  // Restart interval whenever currentIndex changes

  return (
    <div className="relative h-[40vh] w-full  md:h-[80vh]">
      <div className="h-full">
        <img
          src={imagePath[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div
        onClick={handelNext}
        className="absolute left-[5px] top-1/2 flex h-[30px] w-[30px] -translate-y-1/2 translate-x-1/2 transform cursor-pointer items-center justify-center rounded-[5px] border-black bg-black text-white p-1 duration-150 hover:bg-slate-900/90 md:left-[20px] md:h-[50px] md:w-[50px]"
      >
        <FaChevronLeft />
      </div>
      <div
        onClick={handelPrevious}
        className="absolute right-[5px] top-1/2 flex h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-[5px] border bg-black text-white p-1 duration-150 hover:bg-slate-900/90 md:right-[20px] md:h-[50px] md:w-[50px]"
      >
        <FaChevronRight />
      </div>
    </div>
  );
}
