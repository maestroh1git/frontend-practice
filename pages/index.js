// import Head from "next/head";
// import Image from "next/image";
import QRCard from "../components/qr-card";
// import styles from "../styles/Home.module.css";
const cardData = {
  image: "./image-qr-code.png",
  title: "Improving front-end skills",
  subtitle: "Scan QR-Code to access great content. All you need is a camera-enabled mobile device.",
};

export default function Home() {
  return (
    <QRCard
      image={cardData.image}
      title={cardData.title}
      subtitle={cardData.subtitle}
    ></QRCard>
  );
}
