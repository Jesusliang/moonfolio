import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import SvgRocket from "../svgs/flyAwayRocket/flyAwayRocket";
interface Props {}
const ContactMe: React.FC<Props> = (props) => {
  const toast = useToast();
  const { handleSubmit, register } = useForm<{
    name: string;
    email: string;
    message: string;
  }>();
  const [sendEmailLoading, setSendEmailLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    setSendEmailLoading(true);
    try {
      const response = await axios.post("/api/mailer", data);
      // await new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve("");
      //   }, 2000);
      // });
      setEmailSent(true);
    } catch (error) {
    } finally {
      setSendEmailLoading(false);
    }
  });
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
          minHeight={"32rem"}
          display="grid"
          placeItems={"center"}
        >
          {emailSent ? (
            <Box
              textAlign="center"
              py={10}
              px={6}
              position="relative"
              overflow="hidden"
              height={"100%"}
              width={"100%"}
              display="flex"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CheckCircleIcon
                boxSize={"50px"}
                color={"green.500"}
                zIndex="100"
              />
              <Heading as="h2" size="xl" mt={6} mb={2} zIndex="100">
                Your email has been sent
              </Heading>
              <Text color={"gray.500"} zIndex="100">
                In no time you will have my answer!
              </Text>
              <SvgRocket />
            </Box>
          ) : (
            <>
              <form onSubmit={onSubmit} style={{ width: "100%" }}>
                <VStack spacing={3}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        {...register("name")}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        {...register("email")}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      {...register("message")}
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
                    type="submit"
                    isLoading={sendEmailLoading}
                  >
                    Send
                  </Button>
                </VStack>
              </form>
              <Box textAlign={"right"} mt="1rem">
                <Link
                  display="inline-flex"
                  alignItems={"center"}
                  textAlign={"right"}
                  onClick={() => {
                    navigator.clipboard.writeText("jesusliang96@gmail.com");
                    toast({
                      title: "Copied to clipboard!",
                      status: "success",
                      isClosable: true
                    });
                  }}
                >
                  <MdEmail size="20px" />
                  jesusliang96@gmail.com
                </Link>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default ContactMe;
