import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Title,
  TitleIcon,
  Description,
  Button,
  ButtonIcon,
  Label,
  Stats,
  StatsIcon,
} from "./card-styles.js";

function CardInstance(props) {
  const {
    description,
    title,
    titleIcon,
    buttonIcon,
    groupIcon,
    groupStat,
    activityIcon,
    activityStat,
    buttonText,
    theme,
  } = props;

  return (
    <Card className={theme}>
      <Title>
        <TitleIcon src={titleIcon} />
        {title}
      </Title>
      <Description>{description}</Description>
      <Label>
      <Stats>
          <StatsIcon src={groupIcon} />
          {groupStat}
      </Stats>
      <Stats>
          <StatsIcon src={activityIcon} />
          {activityStat}
      </Stats>
      </Label>
      <Button>
        <ButtonIcon src={buttonIcon} />
        {buttonText}
      </Button>
    </Card>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default CardInstance;
