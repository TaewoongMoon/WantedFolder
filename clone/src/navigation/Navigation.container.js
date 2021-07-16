import { useContext, useState } from "react";
import { GlobalContext } from "../../pages/_app";
import NavigationUI from "./Navigation.presenter";

const NavigationPage = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [mobileMenuList, setMobileMenuList] = useState("");
  const onMouseOverNavOpen = (event) => {
    if (event.target.id === "탐색") {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  };

  const onMouseOverBodyPage = () => {
    setNavOpen(false);
  };

  const onClickMobileMenuList = (event) => {
    setMobileMenuList(event.target.id);
  };

  console.log(mobileMenuList);

  return (
    <NavigationUI
      navOpen={navOpen}
      onMouseOverBodyPage={onMouseOverBodyPage}
      onMouseOverNavOpen={onMouseOverNavOpen}
      onClickMobileMenuList={onClickMobileMenuList}
      mobileMenuList={mobileMenuList}
    />
  );
};

export default NavigationPage;
