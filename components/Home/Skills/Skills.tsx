import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import SvgReadingAstronaut from "../../svgs/readingAstronaut/ReadingAstronaut";
interface Props {}
const Skills: React.FC<Props> = (props) => {
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
    <Box marginTop="2rem" color="white" position="relative">
      <Text fontSize={"5xl"} fontWeight={"semibold"} textAlign="center">
        My Skills 💡
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
        <Parallax speed={5}>
          <Box
            maxW={{ base: "200px", md: "320px" }}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
            color="black"
            transform={{ base: "translateX(-30%)", lg: "translateX(-80%)" }}
          >
            <Text fontSize={"xl"} fontWeight={"medium"}>
              Frontend Development
            </Text>
            <Text>React, Redux, Angular, Html, Css/Sass, Graphql, etc</Text>
          </Box>
        </Parallax>
        <Parallax speed={0}>
          <Box
            maxW={{ base: "200px", md: "320px" }}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
            color="black"
            marginTop={"1rem"}
          >
            <Text fontSize={"xl"} fontWeight={"medium"}>
              Backend Development
            </Text>
            <Text>
              Node.js, Express.js, SQL, NoSQL, Microservices, Java, Spring
            </Text>
          </Box>
        </Parallax>
        <Parallax speed={-5}>
          <Box
            maxW={{ base: "200px", md: "320px" }}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
            color="black"
            transform={{ base: "translateX(30%)", lg: "translateX(80%)" }}
            mt="1.5rem"
            marginTop={"4rem"}
          >
            <Text fontSize={"xl"} fontWeight={"medium"}>
              Others
            </Text>
            <Text>Git, Testing, UI/UX</Text>
          </Box>
        </Parallax>
      </Box>
    </Box>
  );
};
export default Skills;
