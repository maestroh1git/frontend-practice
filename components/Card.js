import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Define the Card component using the styled() function
const Card = styled.div`
  width: calc(50% - 10px);
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: text-top;
`;

// Define the image styles
const Image = styled.img`
  width: 50%;
  height: auto;
`;

// Define the heading styles
const Heading = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
`;

// Define the paragraph styles
const Paragraph = styled.p`
  font-size: 0.9em;
  color: #333;
`;

function CardInstance(props) {
  const { image, description, title } = props;

  return (
    <Card>
      <Image src={image} alt={title} />
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </Card>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default CardInstance;
