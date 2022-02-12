import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  Textarea,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
interface Props {}
const ContactMe: React.FC<Props> = (props) => {
  return (
    <Box color="white" padding={"3rem 0"} id="contact">
      <Text fontSize={"5xl"} fontWeight={"semibold"} textAlign="center">
        Send me an email 📪
      </Text>
      <Box display={"grid"} placeItems="center" marginTop={"2rem"}>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          borderRadius="lg"
          p={8}
          color={useColorModeValue("gray.700", "whiteAlpha.900")}
          shadow="base"
          width={"90%"}
          maxW="400px"
        >
          <VStack spacing={3}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>

              <InputGroup>
                <InputLeftElement>
                  <BsPerson />
                </InputLeftElement>
                <Input type="text" name="name" placeholder="Your Name" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>

              <InputGroup>
                <InputLeftElement>
                  <MdOutlineEmail />
                </InputLeftElement>
                <Input type="email" name="email" placeholder="Your Email" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                resize="none"
              />
            </FormControl>
            <Button
              colorScheme="blackAlpha"
              bg="black"
              color="white"
              _hover={{
                bg: "gray.700"
              }}
              isFullWidth
            >
              Send
            </Button>
          </VStack>
          <Box textAlign={"right"} mt="1rem">
            <Link
              display="inline-flex"
              alignItems={"center"}
              textAlign={"right"}
            >
              <MdEmail size="20px" />
              jesusliang96@gmail.com
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ContactMe;
