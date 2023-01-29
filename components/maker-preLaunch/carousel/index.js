import styled from "styled-components";

const CarouselWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1110px;
  height: 383px;
  left: 165px;
  top: 891px;
  @media (max-width: 768px) {
    flex-direction: column;
    top: 626px;
    width: 573px;
    height: 614px;
    left: 97px;
  }
`;

const CarouselCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 255px;
  height: 335px;
 @media(min-width: 770px) {
  &:nth-child(even) {
    top: 48px;
  }
 }
  @media (max-width: 768px) {
    flex-direction: row;
    width: 515px;
    height: 123px;
    &:nth-child(odd) {
      left: 58px;
    }
  }
`;

const CardImage = styled.img`
  // position: absolute;
  width: 160px;
  height: 164px;

  @media (max-width: 768px) {
    width: 120px;
    height: 124px;
  }
`;
const CardContent = styled.div`
  margin-top: 44px;
  // position: relative;
  width: 255px;
  height: 123px;
  @media (max-width: 768px) {
    margin-top: 5px;
    margin-left: 55px;
    width: 340px;
    height: 86px;
  }
`;

const CardHeading = styled.h2`
  // position: absolute;
  height: 25px;
  top: calc(50% - 25px / 2 - 49px);

  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #ffffff;
`;
const CardDescription = styled.p`
  margin: 0px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  color: #777f98;
`;

export default function Carousel() {
  return (
    <CarouselWrapper>
      <CarouselCard index={0}>
        <CardImage src={"./images/passion.svg"} />
        <CardContent>
          <CardHeading>Indulge your passions</CardHeading>
          <CardDescription>
            Your passions shouldn't be just for the weekend. Earn a living doing
            what you love.
          </CardDescription>
        </CardContent>
      </CarouselCard>
      <CarouselCard index={1}>
        <CardImage src={"./images/finance.svg"} />
        <CardContent>
          <CardHeading>Gain financial freedom</CardHeading>
          <CardDescription>
            Start making money work for you. There’s nothing quite like earning
            while you sleep.{" "}
          </CardDescription>
        </CardContent>
      </CarouselCard>
      <CarouselCard index={2}>
        <CardImage src={"./images/lifestyle.png"} />
        <CardContent>
          <CardHeading>Gain financial freedom</CardHeading>
          <CardDescription>
            Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
            your week.
          </CardDescription>
        </CardContent>
      </CarouselCard>
      <CarouselCard index={3}>
        <CardImage src={"./images/work.svg"} />
        <CardContent>
          <CardHeading>Gain financial freedom</CardHeading>
          <CardDescription>
            Selling online means not being pinned down. Want to work AND travel?
            Go for it!
          </CardDescription>
        </CardContent>
      </CarouselCard>
    </CarouselWrapper>
  );
}
