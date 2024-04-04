import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButtons() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${showScrollButton ? "bounce-infinite" : "hidden"} fixed bottom-5 right-5 flex items-center justify-center rounded-xl bg-white p-3 `}
    >
      <button onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
}

export default ScrollToTopButtons;
