import { useState, useEffect } from "react";

const useScreenSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // This avoids a hydration mismatch warning for SSR
  const [screenSize, setScreenSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window size
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set size at the first client-side load
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return screenSize;
};

export default useScreenSize;
