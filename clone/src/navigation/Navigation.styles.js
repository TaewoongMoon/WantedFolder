import styled from "@emotion/styled";

export const TotalWrapper = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
`;

export const GlobalPresentation = styled.div`
  position: fixed;
  padding-right: initial;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
`;

export const GlobalPresentationWithPadding = styled.div`
  margin: 0 auto;
  height: 50px;
  width: 90%;
  position: relative;
  max-width: 1060px;
`;

export const GlobalNav = styled.nav`
  display: flex;
  height: 50px;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-wrap: wrap;
`;

export const WantedLogoWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const WantedLogoLink = styled.a`
  position: relative;
  float: left;
  display: block;
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
`;

export const WantedLogo = styled.i`
  font-size: 22.5px;
  font-family: "icomoon" !important;
  font-weight: 800;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antiaaliased;
`;

export const NavMenu = styled.ul`
  height: inherit;
  text-align: center;
  margin: 0;
  list-style: none;
  display: flex;
  -webkit-box-flex: 1;
  flex: 1;
  justify-content: space-evenly;
  /* margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px; */
`;
export const NavSingleMenu = styled.li`
  height: inherit;
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
  text-align: -webkit-match-parent;
`;

export const NavSingleMenuDetail = styled.span`
  position: relative;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  display: inline-block;
  vertical-align: middle;
`;

export const NavLastaMenuBetaTag = styled.span`
  position: absolute;
  top: 10px;
  right: -7px;
  pointer-events: none;
  font-size: 9px;
  font-weight: 500;
  color: #36f;
  border: box-sizing;
`;

export const NavAsideMenuWrapper = styled.aside`
  padding: 9px 0;
  height: 100%;
  display: block;
`;

export const NavAsideMenuMidWrapper = styled.ul`
  height: 100%;
  margin: 0;
  list-style: none;
`;

export const NavAsideMenuLogo = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  width: 43px;
  height: 28px;
`;
export const NavAsideMenuLogoSize = styled.div`
  position: relative;
  margin-top: 5px;
  height: 100%;
  padding: 0 10px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
`;

export const NavProfileIconWrapper = styled.li`
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 5px;
  position: relative;
  height: 100%;
  vertical-align: middle;
  width: 43px;
`;

export const NavProfileIconMidWrapper = styled.div`
  height: 32px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  vertical-align: top;
  padding: 0;
  margin-right: 11px;
`;

export const NavProfileIconLowWrapper = styled.div`
  height: 32px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 32px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  -webkit-box-pack: center;
  justify-content: center;
  overflow: hidden;
`;

export const NavProfileIcon = styled.div`
  background-image: url("https://lh3.googleusercontent.com/a/AATXAJz6Q07p-JDYT_U9fsxk9l38Jfei1OTJwZ1dvQUo=s96-c");
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const NavForEmployers = styled.li`
  display: inline-flex;
  position: relative;
  height: 100%;
  vertical-align: middle;
`;

export const NavForEmployersTemp = styled.li`
  content: "|";
  width: 1px;
  height: 10px;
  background-color: #e1e2e3;
  margin: auto 10px;
`;

export const NavForEmployersText = styled.span`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin: 0 0 0 15px;
  font-weight: 400;
  /* display: inline-block; */
  /* vertical-align: bottom; */
`;

export const NavDetailWrapper = styled.div`
  top: 50px;
  height: auto;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: 0.5s;
`;

export const NavDetailMidWrapper = styled.div`
  position: relative;
  height: ${(props) => (!props.isActive ? "0%" : "100%")};
  max-height: 625px;
  background-color: #fff;
  transition: 0.5s;
`;

export const NavDetailContainer = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  padding: 0;
  width: 90%;
`;

export const NavDetailRow = styled.div`
  margin-right: -20px;
`;

export const NavDetailSingleCard = styled.div`
  float: left;
  width: 16.666%;
  height: 270px;
  padding: 40px 20px 0 0;
  text-align: left;
`;

export const NavDetailTitle = styled.div`
  position: relative;
  font-size: 17px;
  color: #333;
  line-height: 20px;
  vertical-align: top;
  padding-right: 20px;
  padding-bottom: 15px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: inherit;
  font-weight: 500;
`;
export const NavDetailDirectionIcon = styled.i`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 18px;
  color: #999;
  font-family: "icomoon" !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
`;
