import styled from "styled-components";

const HeroContainer = styled.div`
  position: absolute;
  width: 1553px;
  height: 459px;
  top: 230px;
  display: flex;
  div {
    justify-content: center;
  }
  @media (max-width: 768px) {
    top: 160px;
    width: 768px;
  }
`;
const LeftImage = styled.img`
  content: url("./images/left_image.svg");
  position: absolute;
  width: 408px;
  height: 459px;
  left: -23px;
  @media (max-width: 768px) {
    position: relative;
    width: 314px;
    height: 356px;
    left: -147px;
  }
`;
const RightImage = styled.img`
  content: url("./images/right_image.svg");
  position: absolute;
  width: 396px;
  height: 444px;
  left: 1075px;

  @media (max-width: 768px) {
    position: relative;
    width: 317px;
    height: 356px;
    left: 285px;
  }
`;
const Squiggly = styled.img`
  content: url("./images/squiggly.svg");
  position: absolute;
  width: 544.31px;
  height: 377.98px;
  left: 451.5px;
  top: -17.9px;

  background: #080c20;
  mix-blend-mode: normal;
  opacity: 0.25;

  @media (max-width: 768px) {
    width: 386px;
height: 268px;
left: 191px;
top: -19px;
  }
`;

const CenterContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 730px;
  height: 318px;
  left: 355px;
  top: 71px;
  @media (max-width: 768px) {
    position: absolute;
    width: 457px;
    height: 254px;
    left: 155px;
    top: 50px;
  }
`;
const CenterContentHeading = styled.h1`
  width: 500px;
  height: 113px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  /* or 117% */

  text-align: center;
  margin: 0px;

  color: #ffffff;

  span {
    color: #3ee9e5;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 384px;
    height: 81px;
font-size: 32px;
line-height: 40px;
  }
`;
const CenterContentDescription = styled.p`
  width: 540px;
  height: 75px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */
  margin: 24px 0px;

  text-align: center;

  color: #777f98;

  @media (max-width: 768px) {
    position: relative;
    width: 454px;
    height: 75px;
font-size: 15px;
line-height: 25px;
  }
`;
const CenterContentImage = styled.img`
  content: url("./images/mouse.svg");
  width: 26px;
  height: 42px;
  
  @media (max-width: 768px) {
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <LeftImage />
      <Squiggly />
      <RightImage />
      <CenterContentWrapper>
        <CenterContentHeading>
          Get paid for the work you <span>love</span> to do.
        </CenterContentHeading>
        <CenterContentDescription>
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </CenterContentDescription>
        <CenterContentImage />
      </CenterContentWrapper>
    </HeroContainer>
  );
}
