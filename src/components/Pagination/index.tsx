import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import PaginationItem from "./components/PaginationItem";

const Pagination: React.FC = () => {
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
        <PaginationItem isCurrentPage number={1} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </Stack>
    </Stack>
  );
};

export default Pagination;
