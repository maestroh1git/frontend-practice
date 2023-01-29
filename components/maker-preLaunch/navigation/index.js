import styled from "styled-components";
import maker_logo from "../../../public/images/maker_logo.svg";

const HeaderContainer = styled.div`
  padding: 0% 10% 0%;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  content: url("./images/maker_logo.svg");
  position: absolute;
  width: 120px;
  height: 35px;
  left: 165px;
  top: 81px;

  @media (max-width: 768px) {
    left: 39px;
    top: 48px;
  }
`;
function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
