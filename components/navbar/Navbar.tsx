import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Link,
  ListItem,
  Slide,
  UnorderedList,
  useMediaQuery
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
interface Props {}
const Navbar: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <>
      <Box
        // onClick={toggleColorMode}
        sx={{
          width: "100%",
          height: "3rem",
          background: "gray.900",
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
          {isSmallScreen ? (
            <Button
              onClick={() => {
                setOpenNavbar(true);
              }}
              variant={"ghost"}
              _hover={{
                backgroundColor: "none"
              }}
              _active={{
                backgroundColor: "none"
              }}
            >
              <HamburgerIcon fontSize={"3xl"} />
            </Button>
          ) : (
            <>
              <Link href="#home">{t("navbar.home")}</Link>
              <Link href="#work">{t("navbar.myWork")}</Link>
              <Link href="#skills">{t("navbar.skills")}</Link>
              <Link href="#about">{t("navbar.about")}</Link>
              <Link href="#contact">{t("navbar.contact")}</Link>
            </>
          )}
        </Box>
      </Box>
      <Slide
        direction="right"
        in={openNavbar}
        style={{
          zIndex: 800,
          right: "0",
          width: "100%",
          height: "100vh",
          display: "Flex"
        }}
      >
        <Box
          width="40%"
          onClick={() => {
            setOpenNavbar(false);
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "60%",
            fontSize: "2xl",
            background: "gray.900",
            "&>*:not(:first-of-type)": {
              marginTop: ".5rem"
            }
          }}
        >
          <Link href="#home" onClick={() => setOpenNavbar(false)}>
            {t("navbar.home")}
          </Link>
          <Link href="#work" onClick={() => setOpenNavbar(false)}>
            {t("navbar.myWork")}
          </Link>
          <Link href="#skills" onClick={() => setOpenNavbar(false)}>
            {t("navbar.skills")}
          </Link>
          <Link href="#about" onClick={() => setOpenNavbar(false)}>
            {t("navbar.about")}
          </Link>
          <Link href="#contact" onClick={() => setOpenNavbar(false)}>
            {t("navbar.contact")}
          </Link>
        </Box>
      </Slide>
    </>
  );
};
export default Navbar;
