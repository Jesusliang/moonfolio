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
import { useTranslation } from "react-i18next";
import { BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import SvgRocket from "../svgs/flyAwayRocket/FlyAwayRocket";
interface Props {}
const ContactMe: React.FC<Props> = (props) => {
  const { t } = useTranslation();
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
        {t("contactMe.title")} 📪
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
                {t("contactMe.emailSent.title")}
              </Heading>
              <Text color={"gray.500"} zIndex="100">
                {t("contactMe.emailSent.description")}
              </Text>
              <SvgRocket />
            </Box>
          ) : (
            <>
              <form onSubmit={onSubmit} style={{ width: "100%" }}>
                <VStack spacing={3}>
                  <FormControl isRequired>
                    <FormLabel> {t("contactMe.form.name.title")}</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input
                        type="text"
                        placeholder={t("contactMe.form.name.placeholder")}
                        {...register("name")}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>{t("contactMe.form.email.title")}</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input
                        type="email"
                        placeholder={t("contactMe.form.email.placeholder")}
                        {...register("email")}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>{t("contactMe.form.message.title")}</FormLabel>

                    <Textarea
                      placeholder={t("contactMe.form.message.placeholder")}
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
                    {t("contactMe.form.send")}
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
                      title: t("alerts.copiedToClipboard"),
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
