import styled from "styled-components";

export const HeroWrapper = styled.div`

grid-area: hero;
font-size: 30px;
display: grid;
grid-template-columns:1fr 1fr;
grid-template-rows: 2fr 1fr;
grid-template-areas: "heroimagewrapper heroimagewrapper"
"heroheading heroinnertext";
// width: auto;
gap: 3rem;

@media only screen and (max-width: 700px) {
    grid-template-columns: auto;
  grid-template-rows: 2fr 1fr 1fr;
    grid-template-areas:
      "heroimagewrapper"
      "heroheading"
      "heroinnertext";


`
export const HeroImageWrapper = styled.div`
grid-area: heroimagewrapper;`


export const HeroInnerTextWrapper = styled.div`
grid-area: heroinnertext;
// height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;`

export const HeroImage = styled.img`
content: url("./image-web-3-desktop.jpg");
width: 100%;
height: 100%;

`
export const HeroHeadingWrapper = styled.div`
grid-area: heroheading;
// height: auto;`
export const HeroHeading = styled.h1`
// width: auto;
// height: auto;
font-size: 4.8rem;
font-family: "Inter-ExtraBold";
font-weight: 700;
margin-top: auto;
margin-bottom: auto;`

export const HeroDescription = styled.p`
font-family: "Inter-Regular";
font-size: 30px;
font-weight: 400;
color: hsl(236, 13%, 42%);
// width: auto;
`
export const HeroButton = styled.button`
width: 150px;
background-color: hsl(5, 85%, 63%);
height: 50px;
text-align: center;
font-weight: 400;
color: hsl(36, 100%, 99%);
&:hover, &:focus{
    background-color: hsl(240, 100%, 5%);
}
padding: 0;
border: none;`