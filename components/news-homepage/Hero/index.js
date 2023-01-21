import {
  HeroWrapper,
  HeroImage,
  HeroHeadingWrapper,
  HeroHeading,
  HeroDescription,
  HeroButton,
  HeroImageWrapper,
  HeroTextWrapper,
  HeroInnerTextWrapper,
} from "./hero-styles";

function Hero(props) {
  const {} = props;
  return (
    <HeroWrapper>
      <HeroImageWrapper>
        <HeroImage />
      </HeroImageWrapper>
        <HeroHeadingWrapper>
        <HeroHeading>The Bright Future of Web 3.0?</HeroHeading>
        </HeroHeadingWrapper>
        <HeroInnerTextWrapper>
          <HeroDescription>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </HeroDescription>
          <HeroButton>READ MORE</HeroButton>
        </HeroInnerTextWrapper>
    </HeroWrapper>
  );
}

export default Hero;
