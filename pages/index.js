// import Head from "next/head";
// import Image from "next/image";
import CardWrapperInstance from "../components/CardWrapper";
import CardInstance from "../components/Card";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <CardWrapperInstance wrapperTitle="Community Link Card" image="./done.svg">
      <CardInstance
        title="Decentraland"
        description="The first decentralized metaverse that is built, governed, and owned by its users."
        headingImage="./rarible.svg"
        buttonImage="./union.svg"
      />
      <CardInstance
        title="Decentraland"
        description="The first decentralized metaverse that is built, governed, and owned by its users."
        headingImage="./rarible.svg"
        buttonImage="./union.svg"
      />
    </CardWrapperInstance>
  );
}
