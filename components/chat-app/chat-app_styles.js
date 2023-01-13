import styled from "styled-components";

//page
export const Page = styled.div`
  height: 100vh;
  width: 100%;
  background: hsl(0, 0%, 100%);
`;

//text area
export const DetailsWrapper = styled.div`
  position: fixed;
  top: 47%;
  left: 53%;
`;
export const Details = styled.div`
  height: auto;
  width: 390px;
`;
export const DetailsHeading = styled.h1`
  font-weight: 500;
`;
export const DetailsDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: hsl(270, 7%, 64%);
  font-family: "Rubik";
`;

//phone ui
export const PhoneWrapper = styled.div`
background-color: hsl(0, 0%, 100%);
  position: fixed;
  top: 20%;
  left: 16%;
  border: 10px solid;
  border-radius: 20px;
  border-color: white;
  box-shadow: 20px 20px 600px grey;
`;
export const Phone = styled.div`
// background-color: hsl(270, 20%, 96%);
background-color: yellow;


border-radius: 20px;
padding: 20px;
height: 420px;
width: 270px;`;
export const PhoneNotch = styled.div``;
export const PhoneProfileWrapper = styled.div``;
export const PhoneProfile = styled.div``;
export const PhoneProfileName = styled.h2``;
export const PhoneProfileImage = styled.img``;
export const PhoneProfileText = styled.p``;
export const PhoneProfileIconBack = styled.img``;
export const PhoneProfileIconMenu = styled.img``;
export const PhoneChatArea = styled.div``;
export const PhoneChatBubble = styled.div``;
export const PhoneChatImage = styled.img``;
export const PhoneChatPricingBubble = styled.div``;
export const PhoneSubmitButton = styled.button``;
export const PhoneSubmitButtonIcon = styled.img``;
export const PhoneChatTextInput = styled.textarea``;

//Hero blob
export const HeroBlob = styled.div`
  background-color: hsl(293, 100%, 63%);
  position: fixed;
  height: 650px;
  width: 400px;
  left: -100px;
  border-radius: 0 0 300px 300px;
`;

export const HeroBlobFlipped = styled.div`
  background-color: hsl(293, 100%, 63%);
  opacity: 0.15;
  position: fixed;
  height: 650px;
  width: 420px;
  top: 300px;
  right: -150px;
  border-radius: 300px 300px 0 0;
`;
