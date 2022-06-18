import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type RegisterUserProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const registerUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const CreateUser: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<RegisterUserProps>({
    resolver: yupResolver(registerUserSchema),
  });
  const { errors } = formState;

  const handleRegister: SubmitHandler<RegisterUserProps> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <Box>
      <Header />
      <Flex
        as="form"
        w="100%"
        my="8"
        maxW={1480}
        mx="auto"
        px="6"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight={"normal"}>
            Create User
          </Heading>
          <Divider my="6" borderColor={"gray.700"} />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth={240} spacing="8" w="100%">
              <Input
                name="name"
                label="Complete name"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth={240} spacing="8" w="100%">
              <Input
                name="password"
                label="Password"
                type={"password"}
                error={errors.password}
                {...register("password")}
              />
              <Input
                name="confirm_password"
                label="Confirm password"
                type="password"
                error={errors.confirmPassword}
                {...register("confirmPassword")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify={"flex-end"}>
            <HStack spacing={6}>
              <Link href={"/users"} passHref>
                <Button colorScheme={"whiteAlpha"}>Cancel</Button>
              </Link>
              <Button
                type="submit"
                colorScheme={"pink"}
                isLoading={formState.isSubmitting}
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
