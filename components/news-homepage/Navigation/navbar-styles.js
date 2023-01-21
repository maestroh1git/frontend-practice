import styled from "styled-components";

export const NavBarWrapper = styled.div`
  grid-area: header;
  font-size: 21px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  text-align: bottom;
  // width: auto;
`;
export const Nav = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const NavLi = styled.li`
// &:not:(:last-child){
//   margin-right: 3rem;
// }
${
  ({index}) => {
    if (index === 4) return `
      margin-right: 0;
    `
    else return `
    margin-right: 5rem;
    `
  }
}
`;

export const NavLink = styled.a`
  list-style-type: none;
  color: hsl(236, 13%, 42%);
  font-family: "inter-regular";
  flex-direction: row;
  text-decoration:none;
  text-align:center;
  &:hover,
  &:focus {
    color: hsl(35, 77%, 62%);
  }
  &:active {
    color: hsl(35, 77%, 62%);
  }
`;
export const NavLogo = styled.img`
  content: url("./logo.svg");
  // height: auto;
  // width: auto;
`;
