import React from "react";

export const useResponsive = (width = 600) => {
  const isSSR = typeof window !== "undefined";

  const [isMobileView, setIsMobileView] = React.useState(false);

  const [windowSize, setWindowSize] = React.useState(window.innerWidth);
  const setResponsiveness = () => {
    setWindowSize(window.innerWidth);
    window.innerWidth < width ? setIsMobileView(true) : setIsMobileView(false);
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => setResponsiveness());

    return () =>
      window.removeEventListener("resize", () => setResponsiveness());
  }, []);

  return [isMobileView, windowSize];
};
