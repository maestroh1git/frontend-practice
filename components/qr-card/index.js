import {
  CardWrapper,
  InnerCardWrapper,
  CardContent,
  CardImage,
  CardHeading,
  CardText,
} from "./qr-styles.js";

function QRCard(props) {
  const { image, title, subtitle } = props;
  return (
    <CardWrapper>
      <InnerCardWrapper>
        <CardImage src={image} alt={title} />
        <CardContent>
          <CardHeading>{title}</CardHeading>
          <CardText>{subtitle}</CardText>
        </CardContent>
      </InnerCardWrapper>
    </CardWrapper>
  );
}

export default QRCard;
