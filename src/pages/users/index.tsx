import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import Header from "../../components/Header";

import Pagination from "../../components/Pagination";
import Sidebar from "../../components/SideBar";
import Link from "next/link";

const UserList: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="8" maxW={1480} mx="auto" px={["4", "4", "6"]}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify={"space-between"} align="center">
            <Heading size={"lg"} fontWeight="normal">
              Users
            </Heading>
            <Link href={"/users/create"} passHref>
              <Button
                as="a"
                size="sm"
                cursor={"pointer"}
                fontSize={"sm"}
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Create new
              </Button>
            </Link>
          </Flex>

          <Table colorScheme={"whiteAlpha"}>
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme={"pink"} />
                </Th>
                <Th>User</Th>
                {isWideVersion && <Th>CreatedAt</Th>}
                {isWideVersion && <Th width={8}>Actions</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme={"pink"} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={"bold"}>Gabriel Duarte</Text>
                    <Text fontSize={"sm"} color="gray.300">
                      Dantts@email.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril 2022</Td>}
                <Td>
                  {isWideVersion && (
                    <HStack spacing={4}>
                      <Button
                        as="a"
                        size="sm"
                        cursor={"pointer"}
                        fontSize={"sm"}
                        colorScheme="pink"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Edit
                      </Button>
                      <Button
                        as="a"
                        size="sm"
                        cursor={"pointer"}
                        fontSize={"sm"}
                        colorScheme="red"
                        leftIcon={<Icon as={BsTrash} fontSize="16" />}
                      >
                        Delete
                      </Button>
                    </HStack>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme={"pink"} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={"bold"}>Gabriel Duarte</Text>
                    <Text fontSize={"sm"} color="gray.300">
                      Dantts@email.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril 2022</Td>}
                <Td>
                  {isWideVersion && (
                    <HStack spacing={4}>
                      <Button
                        as="a"
                        size="sm"
                        cursor={"pointer"}
                        fontSize={"sm"}
                        colorScheme="pink"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Edit
                      </Button>
                      <Button
                        as="a"
                        size="sm"
                        cursor={"pointer"}
                        fontSize={"sm"}
                        colorScheme="red"
                        leftIcon={<Icon as={BsTrash} fontSize="16" />}
                      >
                        Delete
                      </Button>
                    </HStack>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme={"pink"} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={"bold"}>Gabriel Duarte</Text>
                    <Text fontSize={"sm"} color="gray.300">
                      Dantts@email.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril 2022</Td>}
                <Td>
                  {isWideVersion && (
                    <HStack spacing={4}>
                      <Button
                        as="a"
                        size="sm"
                        cursor={"pointer"}
                        fontSize={"sm"}
                        colorScheme="pink"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Edit
                      </Button>
                      <Button
                        as="a"
                        size="sm"
                        cursor={"pointer"}
                        fontSize={"sm"}
                        colorScheme="red"
                        leftIcon={<Icon as={BsTrash} fontSize="16" />}
                      >
                        Delete
                      </Button>
                    </HStack>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
