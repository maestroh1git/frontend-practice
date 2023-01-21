import {
  NewsWrapper,
  News,
  NewsImage,
  NewsText,
  NewsNumber,
  NewsHeading,
  NewsDescription,
} from "./styles";

const topNewsData=[{},{},{}]

function TopNews() {
  return (
    <NewsWrapper>
      <News>
        <NewsImage src="./image-retro-pcs.jpg" />
        <NewsText>
          <NewsNumber>01</NewsNumber>
          <NewsHeading>
            Reviving Retro PCs
          </NewsHeading>
          <NewsDescription>
            What happens when old PCs are given modern upgrades?
          </NewsDescription>
        </NewsText>
      </News>
      <News>
        <NewsImage src="./image-top-laptops.jpg" />
        <NewsText>
          <NewsNumber>02</NewsNumber>
          <NewsHeading>Top 10 Laptops of 2022</NewsHeading>
          <NewsDescription>Our best picks for various budgets and needs.</NewsDescription>
        </NewsText>
      </News>
      <News>
        <NewsImage src="./image-gaming-growth.jpg"/>
        <NewsText>
          <NewsNumber>03</NewsNumber>
          <NewsHeading>The Growth Of Gaming</NewsHeading>
          <NewsDescription>How the pandemic has sparked fresh opportunities.</NewsDescription>
        </NewsText>
      </News>
    </NewsWrapper>
  );
}
export default TopNews;
