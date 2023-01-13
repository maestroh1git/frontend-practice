import {
  Page,
  DetailsWrapper,
  Details,
  DetailsHeading,
  DetailsDescription,
  PhoneWrapper,
  Phone,
  PhoneNotch,
  PhoneProfileWrapper,
  PhoneProfile,
  PhoneProfileName,
  PhoneProfileImage,
  PhoneProfileText,
  PhoneProfileIconBack,
  PhoneProfileIconMenu,
  PhoneChatArea,
  PhoneChatBubble,
  PhoneChatImage,
  PhoneChatPricingBubble,
  PhoneSubmitButton,
  PhoneSubmitButtonIcon,
  PhoneChatTextInput,
  HeroBlob,
  HeroBlobFlipped,
} from "./chat-app_styles.js";

function ChatApp(props) {
  const {} = props;

  return (
    <Page>
      <HeroBlob />
      <PhoneWrapper>
        <Phone></Phone>
      </PhoneWrapper>
      <DetailsWrapper>
        <Details>
          <DetailsHeading>{"Simple booking"}</DetailsHeading>
          <DetailsDescription>
            {
              "Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat."
            }
          </DetailsDescription>
        </Details>
      </DetailsWrapper>
      <HeroBlobFlipped />
    </Page>
  );
}

export default ChatApp;
