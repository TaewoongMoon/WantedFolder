import {
  GlobalNav,
  GlobalPresentationWithPadding,
  NavAsideMenuLogo,
  NavAsideMenuLogoSize,
  NavAsideMenuMidWrapper,
  NavAsideMenuWrapper,
  NavDetailContainer,
  NavDetailMidWrapper,
  NavDetailRow,
  NavDetailSingleCard,
  NavDetailWrapper,
  NavForEmployers,
  NavForEmployersTemp,
  NavForEmployersText,
  NavLastaMenuBetaTag,
  NavMenu,
  NavProfileIcon,
  NavProfileIconLowWrapper,
  NavProfileIconMidWrapper,
  NavProfileIconWrapper,
  NavSingleMenu,
  NavSingleMenuDetail,
  TotalWrapper,
  WantedLogo,
  WantedLogoWrapper,
  NavDetailTitle,
  NavDetailDirectionIcon,
} from "./Navigation.styles";

const NavigationUI = (props) => {
  const navMenu = [
    "탐색",
    "커리어 성장",
    "직군별 연봉",
    "이력서",
    "매치업",
    "프리랜서",
    "Ai 합격예측",
  ];
  const arrow = ">";

  const navPath = [
    {
      d: "M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z",
      fill: "#333",
      stroke: "#333",
    },
    {
      d: "M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z",
      fill: "currentColor",
      stroke: "currentColor",
    },
  ];

  const navDetailTitle = [
    "개발",
    "",
    "경영·비즈니스",
    "마케팅·광고",
    "디자인",
    "고객서비스·리테일",
    "영업",
    "미디어",
    "인사",
    "게임 제작",
    "엔지니어링·설계",
    "금융",
  ];
  return (
    <TotalWrapper>
      <GlobalPresentationWithPadding>
        <GlobalNav>
          <WantedLogoWrapper>
            <WantedLogo>wanted</WantedLogo>
          </WantedLogoWrapper>
          <NavDetailWrapper isActive={props.navOpen}>
            <NavDetailMidWrapper isActive={props.navOpen}>
              <NavDetailContainer>
                <NavDetailRow>
                  {navDetailTitle.map((data) => (
                    <NavDetailSingleCard>
                      <NavDetailTitle>
                        {data}
                        {data !== "" && (
                          <NavDetailDirectionIcon>
                            {arrow}
                          </NavDetailDirectionIcon>
                        )}
                      </NavDetailTitle>
                    </NavDetailSingleCard>
                  ))}
                </NavDetailRow>
              </NavDetailContainer>
            </NavDetailMidWrapper>
          </NavDetailWrapper>
          <NavMenu>
            {navMenu.map((data) => (
              <NavSingleMenu>
                <NavSingleMenuDetail
                  onMouseOver={props.onMouseOverNavOpen}
                  id={data}
                >
                  {data}
                  {data === "Ai 합격예측" && (
                    <NavLastaMenuBetaTag>
                      <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                        <tspan x="0" y="8">
                          Beta
                        </tspan>
                      </text>
                    </NavLastaMenuBetaTag>
                  )}
                </NavSingleMenuDetail>
              </NavSingleMenu>
            ))}
          </NavMenu>
          <NavAsideMenuWrapper>
            <NavAsideMenuMidWrapper>
              {navPath.map((data) => (
                <NavAsideMenuLogo>
                  <NavAsideMenuLogoSize>
                    <svg
                      xlmns="https://www.w3.org/2000/svg"
                      xmlnsXlink="https://www.w3.org/1999/xlink"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <defs>
                        <path d={data.d}></path>
                      </defs>
                      <g
                        fill={data.fill}
                        fillRule="nonzero"
                        stroke={data.stroke}
                        strokeWidth="0.3"
                      >
                        <path d={data.d}></path>
                      </g>
                    </svg>
                  </NavAsideMenuLogoSize>
                </NavAsideMenuLogo>
              ))}
              <NavProfileIconWrapper>
                <NavProfileIconMidWrapper>
                  <NavProfileIconLowWrapper>
                    <NavProfileIcon></NavProfileIcon>
                  </NavProfileIconLowWrapper>
                </NavProfileIconMidWrapper>
              </NavProfileIconWrapper>
              <NavForEmployers>
                <NavForEmployersTemp></NavForEmployersTemp>
                <NavForEmployersText>기업 서비스</NavForEmployersText>
              </NavForEmployers>
            </NavAsideMenuMidWrapper>
          </NavAsideMenuWrapper>
        </GlobalNav>
      </GlobalPresentationWithPadding>
    </TotalWrapper>
  );
};

export default NavigationUI;
