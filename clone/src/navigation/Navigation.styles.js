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
  /* margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px; */
`;
export const NavSingleMenu = styled.li`
  height: inherit;
  display: inline-block;
`;

export const NavSingleMenuDetail = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  display: inline-block;
  vertical-align: middle;
`;
