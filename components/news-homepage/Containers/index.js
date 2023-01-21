import styled from "styled-components";

// export const TopSection = styled.section`
// display: flex;
// flex-direction: row;
// width: fit-content;
// margin-right: 100px;`

export const Page = styled.div`
display: grid;
grid-template-rows: 4rem 6fr auto;
grid-template-columns: 3fr 3fr 3fr;
grid-template-areas:
  "header header header"
  "hero hero side "
  "footer footer footer";
gap: 3rem;
// margin: auto;

@media only screen and (max-width: 700px) {
  grid-template-columns: auto;
grid-template-rows: 4rem auto;
  grid-template-areas:
    "header"
    "hero"
    "side"
    "footer";

}`

// export const BottomSection = styled.section`
// display: flex;
// flex-direction: row;
// width: fit-content;
// margin-right: 100px;

// `