import { useEffect, useRef, useState } from "react";
import UpScroll from "../assets/scrollUp.svg?react";
import DownScroll from "../assets/scrollDown.svg?react";
import {motion} from 'motion/react';
function ProgressScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollIntervalRef = useRef(null);
  const scrollSpeed = 2;
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  const scroll = (direction) => {
    window.scrollBy(0, direction * scrollSpeed);
    scrollIntervalRef.current = requestAnimationFrame(() => scroll(direction));
  };

  // Start scroll animation (up or down)
  const startScroll = (direction) => {
    if (scrollIntervalRef.current) return; // Prevent multiple scrolls running simultaneously
    scroll(direction);
  };
  // Stop scrolling
  const stopScroll = () => {
    cancelAnimationFrame(scrollIntervalRef.current);
    scrollIntervalRef.current = null;
  };

  // Add scroll event listener on mount and remove on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="d-none d-lg-flex justify-content-center flex-column align-items-center gap-2 proContainer shadow-lg"
      style={{ zIndex: 10 }}
    >
      <motion.button
        onHoverStart={{
          y:[100,0]
        }}
        animate={{
          
        }}
        onMouseDown={() => startScroll(-1)}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        className="btn p-0 btn-sm rounded-circle border-2"
      >
        <UpScroll height={20} width={20} />
      </motion.button>
      <div className="progress-container">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ height: `${scrollProgress}%` }}
            aria-valuenow={scrollProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <motion.button
        onHoverStart={{
          y:[100,0]
        }}
        animate={{
          
        }}
        onMouseDown={() => startScroll(1)}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        className="btn p-0 btn-sm rounded-circle border-2"
      >
        <DownScroll height={20} width={20} />
      </motion.button>
    </div>
  );
}

export default ProgressScroll;
