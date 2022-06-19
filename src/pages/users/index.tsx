import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import Header from "../../components/Header";

import Pagination from "../../components/Pagination";
import Sidebar from "../../components/SideBar";
import NextLink from "next/link";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";

const UserList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const handlePrefetchUser = async (userId: string) => {
    await queryClient.prefetchQuery(
      [`@dashgo/users`, userId],
      async () => {
        const res = await api.get("/users/" + userId);

        return res.data;
      },
      { staleTime: 1000 * 60 * 10 } // 10 minutes
    );
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="8" maxW={1480} mx="auto" px={["4", "4", "6"]}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify={"space-between"} align="center">
            <Heading size={"lg"} fontWeight="normal">
              Users
              {!isLoading && isFetching && (
                <Spinner ml="4" size="sm" color="gray.500" />
              )}
            </Heading>
            <NextLink href={"/users/create"} passHref>
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
            </NextLink>
          </Flex>

          {isLoading ? (
            <Flex justify={"center"}>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify={"center"}>
              <Text>Failed to fetch data.</Text>
            </Flex>
          ) : (
            <>
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
                  {data.users.map((user: any) => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme={"pink"} />
                      </Td>
                      <Td>
                        <Box>
                          <Link
                            color={"purple.400"}
                            onMouseEnter={() => handlePrefetchUser(user.id)}
                          >
                            <Text fontWeight={"bold"}>{user.name}</Text>
                          </Link>
                          <Text fontSize={"sm"} color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.created_at}</Td>}
                      <Td>
                        {isWideVersion && (
                          <HStack spacing={4}>
                            <Button
                              as="a"
                              size="sm"
                              cursor={"pointer"}
                              fontSize={"sm"}
                              colorScheme="pink"
                              leftIcon={
                                <Icon as={RiPencilLine} fontSize="16" />
                              }
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
                  ))}
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onChangePage={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
