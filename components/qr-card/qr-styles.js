import styled from "styled-components";

export const CardWrapper = styled.div`
  box-sizing: border-box;
  box-shadow: 0px 0px 28px #888888;
  height: 350px;
  width: 250px;
  border: 1px solid #e7eaee;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InnerCardWrapper = styled.div`
  justify-content: center;
  height: 350px;
  width: 250px;
`;

export const CardContent = styled.div`
  margin: 10px;
  font-size: 10px
`;

export const CardImage = styled.img`
  width: 230px;
  height: 230px;
  position: relative;
  margin: 10px;
  border-radius: 10px;
`;

export const CardText = styled.p`
  text-align: center;
`;

export const CardHeading = styled.h2`
  text-align: center;
`;
