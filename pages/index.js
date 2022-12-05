// import Head from "next/head";
// import Image from "next/image";
import CardWrapperInstance from "../components/CardWrapper";
import CardInstance from "../components/Card";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <CardWrapperInstance wrapperTitle= "Community Link">
      <CardInstance
        title="Card1"
        description="Card first Description"
        image="https://placekitten.com/200/300"
      />
      <CardInstance
        title="Card2"
        description="Card second Description"
        image="https://placekitten.com/300/400"
      />
    </CardWrapperInstance>
  );
}
