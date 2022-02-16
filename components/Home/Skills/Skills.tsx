import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Parallax } from "react-scroll-parallax";
import SvgReadingAstronaut from "../../svgs/readingAstronaut/ReadingAstronaut";
interface Props {}
const Skills: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  const [YoffSet, setYoffSet] = useState(0);
  const readingAstronautContainer = useRef<HTMLDivElement>(null);
  console.log();
  // console.log(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      setYoffSet(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box padding="2rem" color="white" position="relative" id="skills">
      <Text fontSize={"5xl"} fontWeight={"semibold"} textAlign="center">
        {t("mySkills.title")} 💡
      </Text>
      <Box mt={"4rem"} display="grid" placeItems={"center"}>
        <Box
          width={{ base: "80px", md: "150px" }}
          ref={readingAstronautContainer}
          position="absolute"
          right="5%"
          top="30%"
        >
          <Parallax speed={25}>
            <SvgReadingAstronaut />
          </Parallax>
        </Box>
        <Parallax speed={4}>
          <Box
            maxW={{ base: "200px", md: "350px" }}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
            color="black"
            transform={{ base: "translateX(-30%)", lg: "translateX(-80%)" }}
            zIndex="-10"
          >
            <Text fontSize={"2xl"} fontWeight={"medium"}>
              {t("mySkills.frontend")}
            </Text>
            <Text>React, Redux, Angular, Html, Css/Sass, Graphql, etc</Text>
          </Box>
        </Parallax>
        <Parallax speed={0}>
          <Box
            maxW={{ base: "200px", md: "350px" }}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
            color="black"
            zIndex="-10"
            marginTop={"1rem"}
          >
            <Text fontSize={"2xl"} fontWeight={"medium"}>
              {t("mySkills.backend")}
            </Text>
            <Text>
              Node.js, Express.js, SQL, NoSQL, Microservices, Java, Spring, etc
            </Text>
          </Box>
        </Parallax>
        <Parallax speed={-4}>
          <Box
            maxW={{ base: "200px", md: "350px" }}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
            color="black"
            transform={{ base: "translateX(30%)", lg: "translateX(120%)" }}
            mt="2.8rem"
            zIndex="-10"
          >
            <Text fontSize={"2xl"} fontWeight={"medium"}>
              {t("mySkills.others")}
            </Text>
            <Text>Git, Testing, UI/UX, English</Text>
          </Box>
        </Parallax>
      </Box>
    </Box>
  );
};
export default Skills;
