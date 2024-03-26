import { useEffect } from "react";
import { useState } from "react";

function useMobile(num = 640) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= num ? true : false
  );

  useEffect(() => {
    function handleResize(e) {
      if (e.target.innerWidth < num) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [num]);
  return isMobile;
}
export default useMobile;
