"use client";
import { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react"; // Make sure to install lucide-react

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-primary/90 text-white shadow-lg hover:bg-primary transition-all duration-300 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
