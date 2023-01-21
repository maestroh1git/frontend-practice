import {
  SideNewsWrapper,
  SideNewsMain,
  SideNewsHeading,
  SideNewsContent,
  SideNewsContentHeading,
  SideNewsContentDescription,
} from "./styles";

function SideNews() {
  return (
    <SideNewsWrapper>
      <SideNewsMain>
        <SideNewsHeading>New</SideNewsHeading>
        <SideNewsContent>
          <SideNewsContentHeading>Hydrogen VS Electric Cars</SideNewsContentHeading>
          <SideNewsContentDescription>Will hydrogen-fueled cars ever catch up to EVs?</SideNewsContentDescription>
        </SideNewsContent>
        <SideNewsContent>
          <SideNewsContentHeading>The Downsides of AI Artistry</SideNewsContentHeading>
          <SideNewsContentDescription>What are the possible adverse effects of on-demand AI image generation?</SideNewsContentDescription>
        </SideNewsContent>
        <SideNewsContent>
          <SideNewsContentHeading>Is VC Funding Drying Up?</SideNewsContentHeading>
          <SideNewsContentDescription>Private funding by VC firms is down 50% YOY. We take a look at what that means.</SideNewsContentDescription>
        </SideNewsContent>
      </SideNewsMain>
    </SideNewsWrapper>
  );
}

export default SideNews
