//
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const imagePath = [
  "https://education.azhar-edu.org/assets/%D9%85%D8%A4%D8%AA%D9%85%D8%B1%204.jpg",
  "https://education.azhar-edu.org/assets/%D9%85%D8%A4%D8%AA%D9%85%D8%B1%203.jpg",
  "https://education.azhar-edu.org/assets/%D9%85%D8%A4%D8%AA%D9%85%D8%B1%202.jpg",
  "https://education.azhar-edu.org/assets/%D9%85%D8%A4%D8%AA%D9%85%D8%B1%201.jpg",
  "https://education.azhar-edu.org/assets/33.jpg",
  "https://education.azhar-edu.org/assets/31.jpg",
  "https://education.azhar-edu.org/assets/30.jpg",
  "https://education.azhar-edu.org/assets/020.jpeg",
  "https://education.azhar-edu.org/assets/%D8%A7%D9%84%D8%AC%D9%84%D8%B3%D8%A9%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%89.jpg",
  "https://education.azhar-edu.org/assets/008_1.jpg",
  "https://education.azhar-edu.org/assets/025.jpg",
  "https://education.azhar-edu.org/assets/024.jpg",
  "https://education.azhar-edu.org/assets/023.jpg",
];

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
  useEffect(() => {
    const intervalId = setInterval(handelNext, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  // Restart interval whenever currentIndex changes

  return (
    <div className="relative my-1 h-[40vh] border bg-slate-400 md:h-[70vh]">
      <div className="h-full">
        <img
          src={imagePath[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div
        onClick={handelNext}
        className="absolute left-[5px] top-1/2 flex h-[30px] w-[30px] -translate-y-1/2 translate-x-1/2 transform cursor-pointer items-center justify-center rounded-full border border-black bg-slate-600/30 p-1 duration-150 hover:bg-slate-200/60 md:left-[20px] md:h-[50px] md:w-[50px]"
      >
        <FaChevronLeft />
      </div>
      <div
        onClick={handelPrevious}
        className="absolute right-[5px] top-1/2 flex h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border border-black bg-slate-600/30 p-1 duration-150 hover:bg-slate-200/60 md:right-[20px] md:h-[50px] md:w-[50px]"
      >
        <FaChevronRight />
      </div>
    </div>
  );
}
