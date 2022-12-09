import styled from "styled-components";

// Define the Card component using the styled() function
export const Card = styled.div`
  box-sizing: border-box;
  width: 295px;
  height: fit-content;
  border: 1px solid #e7eaee;
  border-radius: 16px;
  margin: 20px;
  display: inline-block;
`;

// Define the description styles
export const Description = styled.p`
  width: 235px;
  height: 36px;
  margin: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 140%;
  letter-spacing: -0.003em;
  color: inherit;
`;

// Define the title styles
export const Title = styled.h3`
  width: 251px;
  height: 22px;
  margin: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 145%;
  letter-spacing: -0.009em;
  color: inherit;
`;

// Define the paragraph styles
export const Stats = styled.span`
  font-size: 0.9em;
  word-spacing: 10px;
  color: inherit;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
`;

export const StatsIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  position: relative;
`;

//Define the button styles
export const Button = styled.button`
  background-color: #ec4d57;
  color: white;
  margin: 10px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 271px;
  height: 32px;
  padding: 5px 12px 5px 8px;
  text-align: center;
  border-radius: 10px;
  font-size: 16px;
  gap: 4px;
`;

export const TitleIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  top: 3px;
  position: relative;
`;
export const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
  margin: 4px 4px 4px 4px;
  position: relative;
`;

//Card Wrapper styles

export const CardWrapper = styled.div`
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;
// Define the heading styles
export const Heading = styled.h3`
  margin: 20px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 5px;
`;
