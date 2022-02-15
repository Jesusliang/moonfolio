import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import RocketHello from "../../../components/svgs/rocketHello/RocketHello";
import { css } from "@emotion/react";
import { Box, Button, chakra, Link, Text } from "@chakra-ui/react";
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
        paddingTop: "3rem",
        display: "flex",
        flexDir: "column"
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
        <Text>Fullstack Developer</Text>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { base: "90%", lg: "750px" },
          margin: "auto",
          marginTop: "auto"
        }}
      >
        <Box
          sx={{
            fontSize: { base: "2rem", md: "2.5rem" },
            opacity: `${offsetY > 0 ? 100 - offsetY * 0.5 : 100}%`
          }}
        >
          <Box>
            I&apos;ll make your product scale to the{" "}
            <chakra.span
              className={styles.moon}
              sx={{
                display: "inline-block",
                borderRadius: "50%",
                fontSize: { base: "2rem", md: "3rem" },
                border: "none",
                background: "transparent",
                position: "relative",
                zIndex: "100",
                filter: "saturate(75%)",
                "&::before": {
                  content: '""',
                  boxShadow: "0 0 35px 15px rgba(255, 255, 0, 0.717)",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  zIndex: "50"
                }
              }}
            >
              🌕
              <chakra.span />
            </chakra.span>{" "}
            through the web
          </Box>

          <Link
            marginTop="5%"
            href="#contact"
            textDecor={"none"}
            _hover={{
              textDecor: "none"
            }}
          >
            <Button
              display="inline-block"
              margin="auto"
              colorScheme="yellow"
              zIndex="100"
              position="relative"
              // bgColor="black"
              sx={{
                "&::before": {
                  content: '""',
                  boxShadow: "0 0 35px 15px rgba(255, 255, 0, 0.6)",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: "-10",
                  width: "100%"
                }
              }}
            >
              Contact me
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            width: { base: "200px", md: "255px" },
            // height: "300px",
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
