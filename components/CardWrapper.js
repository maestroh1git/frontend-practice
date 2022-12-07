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
width: 271px;
height:342px;

`


function CardWrapperInstance(props) {
  const { wrapperTitle, children } = props;

  return (
    <CardWrapper>
      <Icon src="/Check.svg"/>
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
