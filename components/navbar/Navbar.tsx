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
            marginLeft: "1rem"
          },
          marginRight: "1rem"
        }}
        fontWeight="medium"
        fontSize="xl"
      >
        <Link>Home</Link>
        <Link href="#work">My Work</Link>
      </Box>
    </Box>
  );
};
export default Navbar;
