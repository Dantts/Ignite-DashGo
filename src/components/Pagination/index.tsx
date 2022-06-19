import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import PaginationItem from "./components/PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onChangePage: (page: number) => void;
}

const siblingsCount = 1;

const generatePaginationItems = (from: number, to: number) => {
  return [new Array(to - from)]
    .map((_, index) => index + from + 1)
    .filter((page) => page > 0);
};

const Pagination = ({
  currentPage = 1,
  registersPerPage = 10,
  totalCountOfRegisters,
  onChangePage,
}: PaginationProps) => {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);
  const previousPage =
    currentPage > 1
      ? generatePaginationItems(
          currentPage - 1 - siblingsCount,
          currentPage - 1
        )
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePaginationItems(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify={"space-between"}
      align="center"
      spacing={6}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction={"row"} spacing={2}>
        {currentPage > siblingsCount + 1 && (
          <>
            <PaginationItem onChangePage={onChangePage} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => (
            <PaginationItem
              onChangePage={onChangePage}
              key={page}
              number={page}
            />
          ))}

        <PaginationItem
          onChangePage={onChangePage}
          isCurrentPage
          number={currentPage}
        />

        {nextPage.length > 0 &&
          nextPage.map((page) => (
            <PaginationItem
              onChangePage={onChangePage}
              key={page}
              number={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onChangePage={onChangePage} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Pagination;
