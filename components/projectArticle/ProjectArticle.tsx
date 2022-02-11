import React, { useState } from "react";
import {
  Box,
  Link,
  useColorModeValue,
  Heading,
  Image,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
interface Props {
  title: string;
  description: string;
}
const ProjectArticle: React.FC<Props> = (props) => {
  const [openContentModal, setOpenContentModal] = useState(false);
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center"
      >
        <Box
          width={{ base: "100%", sm: "85%" }}
          height="100%"
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          <Link
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            onClick={() => {
              setOpenContentModal(true);
            }}
          >
            <Image
              borderRadius="md"
              src={"./images/bookingWidget.png"}
              alt="bookingWidget"
              objectFit="cover"
            />
          </Link>
        </Box>
        <Box
          zIndex="1"
          width={{ base: "120%", md: "100%" }}
          position="absolute"
          height="100%"
          display={{ base: "none", md: "block" }}
        >
          <Box
            bgGradient={useColorModeValue(
              "radial(blue.600 1px, transparent 1px)",
              "radial(blue.300 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        marginTop={{ base: "1rem", md: "0" }}
      >
        <Heading marginTop="1" fontSize="3xl">
          <Link
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            onClick={() => {
              setOpenContentModal(true);
            }}
          >
            {props.title}
          </Link>
        </Heading>
        <Text
          as="p"
          marginTop=".25rem"
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize="lg"
        >
          {props.description}
        </Text>
        <Box marginTop={{ base: "1rem", md: "auto" }} fontSize="sm">
          <Text>
            Website:{" "}
            <Link color="blue">
              https://www.availroom.com/productos/motor-de-reservas
            </Link>
          </Text>
          <Text>
            Demo:{" "}
            <Link color="blue">https://www.bookingengine.availroom.com</Link>
          </Text>
        </Box>
      </Box>
      <Modal
        onClose={() => setOpenContentModal(false)}
        isOpen={openContentModal}
        scrollBehavior="inside"
        size="3xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenContentModal(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default ProjectArticle;
