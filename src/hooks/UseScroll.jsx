import { useState, useEffect } from "react";
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScrollEvent = (e) => {
      if (window.scrollY > 200) {
        return setScrollY(true);
      }
      if (window.scrollY < 200) {
        return setScrollY(false);
      }
    };
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScrollEvent, {
        passive: true,
      });
    };
  }, [scrollY]);

  return { scrollY };
};

export default useScroll;
