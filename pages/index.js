// import Head from "next/head";
// import Image from "next/image";
import CardWrapperInstance from "../components/CardWrapper";
import CardInstance from "../components/Card";
// import styles from "../styles/Home.module.css";

const cardWrapperData = {
  heading: "Community Link Card",
  headingIcon: "./done.svg",
};

const cardData = [
  {
    title: "Decentraland",
    description:
      "The first decentralized metaverse that is built, governed, and owned by its users.",
    titleIcon: "./rarible.svg",
    buttonIcon: "./union.svg",
    groupIcon: "./group.svg",
    activityIcon: "./lightning.svg",
    groupStat: "167.3K",
    activityStat: "47.2K",
    buttonText: "View community"
  },
  {
    title: "Decentraland",
    description:
      "The first decentralized metaverse that is built, governed, and owned by its users.",
    titleIcon: "./rarible.svg",
    buttonIcon: "./union.svg",
    groupIcon: "./group.svg",
    activityIcon: "./lightning.svg",
    groupStat: "167.3K",
    activityStat: "47.2K",
    buttonText: "View community",
    theme: "dark"
  },
];

export default function Home() {
  return (
    <CardWrapperInstance
      heading={cardWrapperData.heading}
      headingIcon={cardWrapperData.headingIcon}
    >
      <>
        {cardData.map((card, index) => (
          <CardInstance
            key={index}
            theme={card.theme}
            title={card.title}
            description={card.description}
            titleIcon={card.titleIcon}
            buttonIcon={card.buttonIcon}
            groupIcon={card.groupIcon}
            groupStat={card.groupStat}
            activityIcon={card.activityIcon}
            activityStat={card.activityStat}
            buttonText={card.buttonText}
          />
        ))}
      </>
    </CardWrapperInstance>
  );
}
