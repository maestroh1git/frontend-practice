

import { createGlobalStyle } from "styled-components";
// import InterRegular from 'fonts/static/Inter-Regular.ttf'
// import InterBold from 'fonts/static/Inter-Bold.tff'
// import InterExtraBold from 'fonts/static/Inter-ExtraBold.ttf'


const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Inter-Regular';
    src: url('fonts/static/Inter-Regular.ttf') format('truetype') !important;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter-Bold';
    src: url('fonts/static/Inter-Bold.tff') format('truetype') !important;
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter-ExtraBold';
    src: url('/fonts/static/Inter-ExtraBold.ttf') format('truetype') !important;
    font-style: bold;
    font-weight: 800;
    font-display: swap;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp