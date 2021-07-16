import { useState } from "react";
import NavigationUI from "./Navigation.presenter";
import { useMediaQuery } from "react-responsive";

const NavigationPage = () => {
  const [navOpen, setNavOpen] = useState(false);
  const onMouseOverNavOpen = (event) => {
    if (event.target.id === "탐색") {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  };

  return (
    <NavigationUI navOpen={navOpen} onMouseOverNavOpen={onMouseOverNavOpen} />
  );
};

export default NavigationPage;
