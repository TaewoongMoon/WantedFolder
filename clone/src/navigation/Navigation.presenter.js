import {
  GlobalNav,
  GlobalPresentationWithPadding,
  NavMenu,
  NavSingleMenu,
  NavSingleMenuDetail,
  TotalWrapper,
  WantedLogo,
  WantedLogoWrapper,
} from "./Navigation.styles";

const NavigationUI = () => {
  const navMenu = [
    "탐색",
    "커리어 성장",
    "직군별 연봉",
    "이력서",
    "매치업",
    "프리랜서",
    "Ai 합격예측",
  ];
  return (
    <TotalWrapper>
      <GlobalPresentationWithPadding>
        <GlobalNav>
          <WantedLogoWrapper>
            <WantedLogo>wanted</WantedLogo>
          </WantedLogoWrapper>
          <NavMenu>
            {navMenu.map((data) => (
              <NavSingleMenu>
                <NavSingleMenuDetail>{data}</NavSingleMenuDetail>
              </NavSingleMenu>
            ))}
          </NavMenu>
        </GlobalNav>
      </GlobalPresentationWithPadding>
    </TotalWrapper>
  );
};

export default NavigationUI;
