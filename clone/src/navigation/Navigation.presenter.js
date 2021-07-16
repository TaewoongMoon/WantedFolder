import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";
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
  MobileGlobalPresentationWithPadding,
  MobileNavMenu,
  MobileNavSingleMenu,
  MobileGlobalNav,
  MobileNavSingleMenuDetail,
  MobileNavAsideMenuLogo,
  BodyWrapper,
  BodyFirstContainer,
  BodyFirstContainerWrapper,
  BodyFirstContainerImage,
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

  const mobileNavMeun = ["홈", "탐색", "커리어 성장"];
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
  const navPathTwo = [
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
    {
      d: "M15 13.688c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563zm0-5.25c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563zm0-5.25c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563z",
      fill: "#333",
      stroke: "#333",
    },
  ];

  const navDetailTitle = [
    {
      name: "개발",
      sub: [
        "서버 개발자",
        "웹 개발자",
        "프론트엔드 개발자",
        "자바 개발자",
        "소프트웨어 엔지니어",
        "안드로이드 개발자",
        "iOS 개발자",
        "파이썬 개발자",
      ],
    },
    {
      name: ".",
      sub: [
        "Node.js 개발자",
        "데이터 엔지니어",
        "DevOps/시스템 엔지니어",
        "머신러닝 엔지니어",
        "시스템, 네트워크 엔지니어",
        "데이터 사이언티스트",
        "C, C++ 개발자",
        "더보기",
      ],
    },
    {
      name: "경영·비즈니스",
      sub: [
        "서비스 기획자",
        "PM·PO",
        "사업개발·기획자",
        "전략 기획자",
        "운영 매니저",
        "경영지원",
        "데이터 분석가",
        "더보기",
      ],
    },
    {
      name: "마케팅·광고",
      sub: [
        "디지털 마케터",
        "마케터",
        "콘텐츠 마케터",
        "퍼포먼스 마케터",
        "마케팅 전략 기획자",
        "브랜드 마케터",
        "광고 기획자(AE)",
        "더보기",
      ],
    },
    {
      name: "디자인",
      sub: [
        "UX 디자이너",
        "UI, GUI디자이너",
        "웹 디자이너",
        "그래픽 디자이너",
        "모바일 디자이너",
        "BI/BX 디자이너",
        "광고 디자이너",
        "더 보기",
      ],
    },
    {
      name: "고객서비스·리테일",
      sub: [
        "MD",
        "CS 매니저",
        "서비스 운영",
        "리테일 MD",
        "CS 어드바이저",
        "패션 MD",
        "CRM 전문가",
        "더보기",
      ],
    },
    {
      name: "영업",
      sub: [
        "기업영업",
        "외부영업",
        "영업 관리자",
        "기술영업",
        "주요고객사 담당자",
        "솔루션 컨설턴트",
        "해외영업",
        "더보기",
      ],
    },
    {
      name: "미디어",
      sub: [
        "콘텐츠 크리에이터",
        "PD",
        "영상 편집가",
        "에디터",
        "비디오 제작",
        "작가",
        "출판 기획자",
        "더보기",
      ],
    },
    {
      name: "인사",
      sub: [
        "인사담당",
        "리크루터",
        "조직문화",
        "평가·보상",
        "헤드헌터",
        "HRBP",
        "HRD",
        "더보기",
      ],
    },
    {
      name: "게임 제작",
      sub: [
        "게임 기획자",
        "게임 그래픽 디자이너",
        "모바일 게임 개발자",
        "게임 아티스트",
        "게임 클라이언트 개발자",
        "게임 서버 개발자",
        "유니티 개발자",
        "더보기",
      ],
    },
    {
      name: "엔지니어링·설계",
      sub: [
        "전자 엔지니어",
        "기계 엔지니어",
        "전기 엔지니어",
        "전자기계 공학자",
        "로봇·자동화",
        "QA 엔지니어",
        "제품 엔지니어",
        "더보기",
      ],
    },
  ];

  const navDetailLastSection = [
    "금융",
    "제조·생산",
    "물류·무역",
    "의료·제약·바이오",
    "교육",
    "법률·법집행기관",
    "식·음료",
    "건설·시설",
    "공공·복지",
  ];

  const { isMobileSize, isMobileMiddleSize } = useContext(GlobalContext);

  return (
    <TotalWrapper>
      {!isMobileSize && (
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
                          {data.name}
                          {data.name !== "." && (
                            <NavDetailDirectionIcon>
                              {arrow}
                            </NavDetailDirectionIcon>
                          )}
                        </NavDetailTitle>
                        {data.sub.map((data) => (
                          <div
                            style={{
                              display: "block",
                              color: "inherit",
                              textDecoration: "inherit",
                              cursor: "pointer",
                              margin: "0",
                              padding: "0",
                              border: "0",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                fontSize: "13px",
                                color: "#999",
                                padding: "5px 20px 5px 0",
                                width: "100%",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                              }}
                            >
                              {data}
                            </div>
                          </div>
                        ))}
                      </NavDetailSingleCard>
                    ))}
                    <NavDetailSingleCard>
                      {navDetailLastSection.map((data) => (
                        <NavDetailTitle>
                          {data}
                          <NavDetailDirectionIcon>
                            {arrow}
                          </NavDetailDirectionIcon>
                        </NavDetailTitle>
                      ))}
                    </NavDetailSingleCard>
                  </NavDetailRow>
                </NavDetailContainer>
              </NavDetailMidWrapper>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
                onMouseOver={props.onMouseOverBodyPage}
              ></div>
            </NavDetailWrapper>
            <NavMenu>
              {navMenu.map((data) => (
                <NavSingleMenu>
                  <NavSingleMenuDetail
                    onMouseOver={props.onMouseOverNavOpen}
                    id={data}
                    isActive={isMobileMiddleSize}
                  >
                    {data}
                    {data === "Ai 합격예측" && (
                      <NavLastaMenuBetaTag isActive={isMobileMiddleSize}>
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
      )}
      {isMobileSize && (
        <MobileGlobalPresentationWithPadding>
          <MobileGlobalNav>
            <MobileNavMenu>
              {mobileNavMeun.map((data) => (
                <MobileNavSingleMenu isActive={data === props.mobileMenuList}>
                  <MobileNavSingleMenuDetail
                    onClick={props.onClickMobileMenuList}
                    id={data}
                  >
                    {data}
                  </MobileNavSingleMenuDetail>
                </MobileNavSingleMenu>
              ))}
            </MobileNavMenu>
            <NavAsideMenuWrapper>
              <NavAsideMenuMidWrapper>
                {navPathTwo.map((data) => (
                  <MobileNavAsideMenuLogo>
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
                  </MobileNavAsideMenuLogo>
                ))}
              </NavAsideMenuMidWrapper>
            </NavAsideMenuWrapper>
          </MobileGlobalNav>
        </MobileGlobalPresentationWithPadding>
      )}
      <BodyWrapper>
        <BodyFirstContainer>
          <BodyFirstContainerWrapper>
            <BodyFirstContainerImage></BodyFirstContainerImage>
          </BodyFirstContainerWrapper>
        </BodyFirstContainer>
      </BodyWrapper>
    </TotalWrapper>
  );
};

export default NavigationUI;
