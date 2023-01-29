import styled from "styled-components";

const PricingWrapper = styled.div``;
const PricingHeading = styled.div`
  position: absolute;
  width: 540px;
  height: 118px;
  left: 450px;
  top: 1476px;
  @media (max-width: 768px) {
    width: 573px;
    height: 110px;
    left: 97px;
    top: 1381px;
  }
`;
const Heading = styled.h1`
  margin: 0px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 24px;
  line-height: 33px;
  }
`;
const Description = styled.p`
  margin: 0px;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 57.63%;
  bottom: 0%;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  text-align: center;

  color: #777f98;
`;

const PriceCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 920px;
  height: 482px;
  left: 260px;
  top: 1666px;
  @media (max-width: 768px) {
    flex-direction: column;
    width:445px;
    height: 970px;
   justify-content: space-between;
  top: 1547px;
  left: 161px;


  }
`;
const FreeCard = styled.div`
  width: 445px;
  height: 448px;
  border-radius: 8px;
`;
const FreeBackground = styled.div`
  width: 445px;
  height: 425px;
  background: #093f68;
  border-radius: 8px;
  margin-top: 45px;
`;
const FreeImage = styled.img`
  position: relative;
  width: 46px;
  height: 46px;
  left: 38px;
  top: -22px;
`;
const FreeContent = styled.div``;
const PaidCard = styled.div`
  width: 445px;
  height: 448px;
  border-radius: 8px;
`;
const PaidBackground = styled.div`
  width: 445px;
  height: 449px;
  background: #3ee9e5;
  border-radius: 8px;
  margin-top: 33px;

  @media (max-width: 768px) {
  
  }
`;
const PaidImage = styled.img`
  position: relative;
  width: 50.18px;
  height: 64.92px;
  left: 37px;
  top: -33px;
`;
const PaidContent = styled.div`
  position: relative;
  top: -5px;
`;

const ContentHeading = styled.h2`
  position: relative;
  height: 25px;
  left: 8.54%;
  right: 67.42%;
  top: calc(50% - 25px / 2 - 139.5px);

  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height, or 139% */

  color: #ffffff;
  color: ${(props) => props.inputColor || "#FFFFFF"};
`;
const ContentDescription = styled.p`
  position: relative;
  left: 8.54%;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  width: 369px;
  /* or 167% */

  color: ${(props) => props.inputColor || "#FFFFFF"};

  mix-blend-mode: normal;
  opacity: 0.6;
`;
const ContentHeadline = styled.div`
  position: relative;
  height: 55px;
  left: 8.54%;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 55px;
  /* identical to box height */

  color: ${(props) => props.inputColor || "#FFFFFF"}; ;
`;
const ContentList = styled.ul`
  position: relative;
  // list-style-image: url('./images/check.svg');
  list-style-image: url(${(props) => props.image || "./images/check.svg"});
  left: 4.54%;
`;
const ContentLi = styled.li`
  position: relative;
  height: 25px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  color: ${(props) => props.inputColor || "#FFFFFF"}; ;
`;

const Modify = styled.h1`
  position: relative;
  height: 25px;
  width: 56px;
  left: 33.56%;
  top: -50px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  color: #080c20;

  mix-blend-mode: normal;
  opacity: 0.6; ;
`;

export default function Pricing() {
  return (
    <PricingWrapper>
      <PricingHeading>
        <Heading>Our pricing plans</Heading>
        <Description>
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </Description>
      </PricingHeading>
      <PriceCardWrapper>
        <FreeBackground>
          <FreeCard>
            <FreeImage src={"./images/freeImage.svg"} />
            <FreeContent>
              <ContentHeading>Dip your toe</ContentHeading>
              <ContentDescription>
                Just getting started? No problem at all! Our free plan will take
                you a long way.
              </ContentDescription>
              <ContentHeadline>Free</ContentHeadline>
              <ContentList>
                <ContentLi>Unlimited products</ContentLi>
                <ContentLi>Basic analytics</ContentLi>
                <ContentLi>Limited marketplace exposure</ContentLi>
                <ContentLi>10% fee per transaction</ContentLi>
              </ContentList>
            </FreeContent>
          </FreeCard>
        </FreeBackground>
        <PaidBackground>
          <PaidCard>
            <PaidImage src={"./images/paidImage.svg"} />
            <PaidContent primary>
              <ContentHeading inputColor="#080C20">
                Dive right in
              </ContentHeading>
              <ContentDescription inputColor="#080C20">
                Ready for the big time? Our paid plan will help you take your
                business to the next level.
              </ContentDescription>
              <ContentHeadline inputColor="#080C20">
                $25.00<Modify>/ month</Modify>
              </ContentHeadline>
              <ContentList image="./images/dCheck.svg">
                <ContentLi inputColor="#080C20">Custom domain</ContentLi>
                <ContentLi inputColor="#080C20">
                  Advanced analytics and reports
                </ContentLi>
                <ContentLi inputColor="#080C20">
                  High marketplace visibility
                </ContentLi>
                <ContentLi inputColor="#080C20">
                  5% fee per transaction
                </ContentLi>
              </ContentList>
            </PaidContent>
          </PaidCard>
        </PaidBackground>
      </PriceCardWrapper>
    </PricingWrapper>
  );
}
