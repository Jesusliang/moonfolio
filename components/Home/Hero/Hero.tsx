import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import RocketHello from "../../../components/svgs/rocketHello/RocketHello";
import { css } from "@emotion/react";
import { Box, chakra, Text } from "@chakra-ui/react";
import styles from "./Hero.module.scss";

interface Props {}
const Hero: React.FC<Props> = (props) => {
  const [offsetY, setOffsetY] = useState(0);

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
    <Box
      sx={{
        height: "calc(100vh)",
        backgroundSize: "500% 150%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        position: "relative",
        overflow: "hidden",
        paddingTop: "3rem"
      }}
    >
      <Box
        css={css`
          position: fixed;
          width: 100vw;
          height: 100vh;
          background-image: url("/images/background.svg");
          background-size: 500% 150%;
          background-position: center;
          z-index: -900;
          top: 0;
        `}
      />
      <Box
        css={css`
          text-align: center;
          font-size: 1.1rem;
          margin-top: 2rem;
        `}
      >
        <Text>Jesus Liang</Text>
        <Text>Web Developer</Text>
      </Box>
      <Box
        sx={{
          position: "absolute",
          marginTop: "5rem",
          textAlign: "center",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)"
        }}
      >
        <Box
          css={css`
            font-size: 1.7rem;
            width: 300px;
          `}
          style={{
            opacity: `${offsetY > 0 ? 100 - offsetY * 0.5 : 100}%`
          }}
        >
          I&apos;ll make your product scale to the{" "}
          <chakra.span
            className={styles.moon}
            css={css`
              display: inline-block;
              border-radius: 50%;
              font-size: 1.5rem;
              border: none;
              background: transparent;
              position: relative;
              z-index: 100;
              filter: saturate(75%);
              &::before {
                content: "";
                box-shadow: 0 0 35px 15px rgba(255, 255, 0, 0.717);
                position: absolute;
                left: 50%;
                top: 50%;
                z-index: 50;
              }
            `}
          >
            🌕
            <chakra.span />
          </chakra.span>{" "}
          through the web
        </Box>
        <Box
          sx={{
            width: "255px",
            height: "300px",
            marginTop: "2rem"
          }}
          style={{
            transform: `translate(${
              isMobile ? offsetY * 0.8 : offsetY * 2
            }px,-${offsetY * 0.5}px)`
          }}
        >
          <RocketHello />
        </Box>
      </Box>
    </Box>
  );
};
export default Hero;
