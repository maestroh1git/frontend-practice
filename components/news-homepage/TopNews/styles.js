import styled from "styled-components";

export const NewsWrapper = styled.div`
grid-area: footer;
grid-template-columns: 1fr 1fr 1fr;
height: fit-content;
display: grid;
gap: 3rem;
// width: auto;
justify-content: space-between;

@media only screen and (max-width: 700px) {
    grid-template-columns: auto;
  grid-template-rows: 1fr 1fr 1fr;


`
export const News = styled.div`
// width: auto;
height: fit-content;
display: flex;
justify-content: space-between;`
export const NewsImage = styled.img`
height: 300px;
width: 100%;
padding-right: 20px;
`
export const NewsText = styled.div`
// width: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const NewsNumber = styled.h1`
font-size: 30px;
margin: 0px;
font-family: 'Inter-ExtraBold';
color: hsl(233, 8%, 79%);`
export const NewsHeading = styled.h2`
margin-top: 5px;
font-size: 30px;

font-family: 'Inter-Bold';
color: hsl(240, 100%, 5%);
`
export const NewsDescription = styled.p`
color: hsl(236, 13%, 42%);
font-family: 'Inter-Regular';
font-size: 30px;
`
