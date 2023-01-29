import styled from "styled-components";

const FooterWrapper = styled.div`
  position: absolute;
  width: 1440px;
  height: 228px;
  top: 2299px;
  @media (max-width: 768px) {
    width: 1022px;
height: 140px;
left: -340px;
top: 2628px;
  }
`;
const FooterImage = styled.img`
  content: url("./images/footer.svg");
  position: relative;
  width: 1440px;
  height: 228px;
  mix-blend-mode: normal;
  opacity: 0.25;

  @media (max-width: 768px) { width: 1022px;
height: 140px;
left: 166px;
mix-blend-mode: normal;
opacity: 0.25;}
`;

const FooterContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 730px;
  height: 134px;
  left: 359px;
  top: -195px;
`;

const FooterHeading = styled.h1`
  position: relative;
  width: 730px;
  height: 44px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

const FooterCTA = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: relative;
  width: 476px;
  height: 48px;
`;

const FooterInput = styled.input`
  background: #093f68;
  position: relative;
  border-radius: 24px;
  outline: none;
  width: 320px;
  height: 48px;
  padding-left: 18px;
  box-sizing: border-box;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */
  &::placeholder {
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.4;
  }

  &:focus {
    border: 2px solid red;
    border-color: #3ee9e5;
    color: #ffffff;
  }
`;
const FooterSubmitButton = styled.button`
  background: #3ee9e5;
  border-radius: 24px;
  width: 140px;
  height: 48px;

  box-sizing: border-box;
  text-align: center;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  text-align: center;

  color: #093f68;
  &:hover {
    background-color: #080c20;
    border: 2px solid #3ee9e5;
    color: #ffffff;
  }
  &:focus {
    background-color: #080c20;
    border: 2px solid #3ee9e5;
    color: #ffffff;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterImage />
      <FooterContentWrapper>
        <FooterHeading>Get notified when we launch</FooterHeading>
        <FooterCTA>
          <FooterInput name="email" type="email" placeholder="Email address" />
          <FooterSubmitButton>Get notified</FooterSubmitButton>
        </FooterCTA>
      </FooterContentWrapper>
    </FooterWrapper>
  );
}
