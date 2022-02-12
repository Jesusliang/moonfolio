import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Avatar,
  useColorModeValue
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const AboutMe = () => {
  return (
    <Box
      position={"relative"}
      sx={{
        padding: "4rem 0",
        backgroundColor: useColorModeValue("gray.100", "gray.800"),
        "&>*:not(:first-of-type)": {
          marginTop: "5rem"
        }
      }}
      zIndex="100"
      id="about"
    >
      <Text fontSize={"5xl"} fontWeight={"semibold"} textAlign="center">
        About me 📃
      </Text>
      <Box
        color="black"
        width={{ base: "95%", md: "1000px" }}
        margin="auto"
        marginTop="3rem"
        zIndex={100}
      >
        <Box
          p={4}
          display="flex"
          justifyContent="space-around"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            order={{ base: 2, md: 0 }}
            marginTop={{ base: "3rem", md: ".5rem" }}
          >
            <Heading>Contact</Heading>
            <Box
              marginTop="1rem"
              sx={{
                "& > *:not(:first-of-type)": {
                  marginTop: ".5rem"
                }
              }}
            >
              <Button
                size="md"
                variant="ghost"
                border={"2px solid transparent"}
                _hover={{ border: "2px solid blue", borderColor: "blue.600" }}
                leftIcon={<MdEmail size="20px" />}
              >
                jesusliang96@gmail.com
              </Button>
              <Button
                size="md"
                variant="ghost"
                border={"2px solid transparent"}
                _hover={{ border: "2px solid blue", borderColor: "blue.600" }}
                leftIcon={<BsLinkedin size="20px" />}
              >
                https://linkedin.com/in/jesus-liang/
              </Button>
            </Box>
          </Box>
          <Box borderRadius="lg" color="black" padding="0 3rem">
            <Avatar
              size={"2xl"}
              src={"/images/me.jpg"}
              marginX="auto"
              mb={"3rem"}
            />
            <Text>
              Soy un desarrollador fullstack de Javascript/Typescript. Con
              especialización en React y Nodejs. Me encanta el desarrollo,
              aprender cosas nuevas y resolver problemas! <br /> <br />
              Actualmente lidero un pequeño equipo frontend en una startup
              llamada Availroom en el cual me encargo principalmente de la
              arquitectura frontend de todos los proyectos asi como de
              mantenerlos. Asimismo, también he desarrollado en situaciones
              microservicios
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
