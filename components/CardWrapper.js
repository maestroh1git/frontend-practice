import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Define the CardWrapper component using the styled() function
const CardWrapper = styled.div`
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;
// Define the heading styles
const Heading = styled.h3`
  margin: 20px;
`;


const Icon = styled.img`
width: 16px;
height: 16px;
margin-left: 5px;
`


function CardWrapperInstance(props) {
  const { wrapperTitle, image, children } = props;

  return (
    <CardWrapper>
      <Heading>{wrapperTitle}<Icon src={image}/></Heading>
      {children}
    </CardWrapper>
  );
}

CardWrapper.propTypes = {
  //   children: PropTypes.arrayOf(PropTypes.elements).isRequired,
  children: PropTypes.node,
};

export default CardWrapperInstance;
