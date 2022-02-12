import {
  Box,
  Link,
  ListItem,
  UnorderedList,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
interface Props {}
const Navbar: React.FC<Props> = (props) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      // onClick={toggleColorMode}
      sx={{
        width: "100%",
        height: "3rem",
        background: useColorModeValue("gray.900", "gray.900"),
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "fixed",
        zIndex: 200,
        color: "white"
      }}
    >
      <Box
        sx={{
          "&>*:not(:first-of-type)": {
            marginLeft: { base: "1rem", md: "1.5rem" }
          },
          marginRight: "1rem"
        }}
        fontWeight="medium"
        fontSize={{ base: "sm", md: "xl" }}
      >
        <Link href="#home">Home</Link>
        <Link href="#work">My Work</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </Box>
    </Box>
  );
};
export default Navbar;
