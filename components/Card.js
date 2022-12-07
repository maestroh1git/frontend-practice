import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Define the Card component using the styled() function
const Card = styled.div`
  box-sizing: border-box;
  width: 295px;
  height: fit-content;
  border: 1px solid #e7eaee;
  border-radius: 16px;
  margin: 20px;
  display: inline-block;
`;

// Define the image styles
const Description = styled.p`
  width: 235px;
  height: 36px;
  margin: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 140%;
  letter-spacing: -0.003em;
  color: black;
`;

// Define the heading styles
const Heading = styled.h3`
  width: 251px;
  height: 22px;
  margin: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 145%;
  letter-spacing: -0.009em;
  color: black;
`;

// Define the paragraph styles
const Paragraph = styled.p`
  font-size: 0.9em;
  color: #333;
  margin: 10px;
`;

//Define the button styles
const Button = styled.button`
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

const HeadingIcon = styled.img`
width: 16px;
height: 16px;
margin-right: 4px;
top: 3px;
position: relative;
`
const ButtonIcon = styled.img`
width: 16px;
height: 16px;
margin-right: 4px;
position: relative;
`

function CardInstance(props) {
  const { userCount, interactions, description, title, headingImage, buttonImage } = props;

  return (
    <Card>
      <Heading><HeadingIcon src={headingImage}/>{title}</Heading>
      <Description>{description}</Description>
      <Paragraph>{"icon Stats icon stats"}</Paragraph>
      <Button><ButtonIcon src={buttonImage}/>{"View community"}</Button>
    </Card>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default CardInstance;
