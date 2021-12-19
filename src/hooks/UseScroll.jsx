import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  const listener = (e) => {
    setScrollY(window.scrollY > 200 ? true : false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return [scrollY];
}

export default useScroll;
