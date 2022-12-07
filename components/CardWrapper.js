import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Define the CardWrapper component using the styled() function
const CardWrapper = styled.div`
background-color: white;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;
// Define the heading styles
const Heading = styled.h3`
font-color: black;
  font-size: 1.2em;
  margin: 10px 0;
`;

function CardWrapperInstance(props) {
  const { wrapperTitle, children } = props;

  return (
    <CardWrapper>
      <Heading>{wrapperTitle}</Heading>
      {children}
    </CardWrapper>
  );
}

CardWrapper.propTypes = {
  //   children: PropTypes.arrayOf(PropTypes.elements).isRequired,
  children: PropTypes.node,
};

export default CardWrapperInstance;
