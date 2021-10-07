import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.scss";
import RocketHello from "../components/svgs/rocketHello/RocketHello";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import FadeInOutScroll from "../components/FadeInOutScroll/FadeInOutScroll";
import Navbar from "../components/navbar/Navbar";

const Home: NextPage = () => {
  const [offsetY, setOffsetY] = useState(0);
  const myWorkEl = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.home}>
      <Head>
        <title>Moonfolio</title>
        <meta name="description" content="Jesus Liang's Portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.background}></div>
      <Navbar />

      <div className={styles.hero}>
        <div className={styles.heroTitle}>
          <p>Jesus Liang</p>
          <p>Web developer</p>
        </div>
        <div className={styles.descriptionContainer}>
          <div
            className={styles.description}
            style={{
              opacity: `${offsetY > 0 ? 100 - offsetY * 0.5 : 100}%`
            }}
          >
            I&apos;ll make your product scale to the{" "}
            <span className={styles.moon}>
              🌕
              <span className={styles.glow} />
            </span>
            through the web
          </div>
          <div
            className={styles.astronautContainer}
            style={{
              transform: `translate(${
                isMobile ? offsetY * 0.8 : offsetY * 2
              }px,-${offsetY * 0.1}px)`
            }}
          >
            <RocketHello />
          </div>
        </div>
      </div>
      <FadeInOutScroll>
        <div className={styles.myWork} ref={myWorkEl}>
          <h1>My work</h1>
          <div className={styles.myWork}></div>
        </div>
      </FadeInOutScroll>
    </div>
  );
};

export default Home;
