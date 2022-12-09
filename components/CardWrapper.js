import React from "react";
import PropTypes from "prop-types";
import { CardWrapper, Heading, Icon } from "../styles/card-styles.js";

function CardWrapperInstance(props) {
  const { heading, headingIcon, children } = props;

  return (
    <CardWrapper>
      <Heading>
        {heading}
        <Icon src={headingIcon} />
      </Heading>
      {children}
    </CardWrapper>
  );
}

CardWrapper.propTypes = {
  //   children: PropTypes.arrayOf(PropTypes.elements).isRequired,
  children: PropTypes.node,
};

export default CardWrapperInstance;
