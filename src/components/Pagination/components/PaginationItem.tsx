import { Button } from "@chakra-ui/react";
import React from "react";

interface PaginationItemProps {
  number: number;
  isCurrentPage?: boolean;
  onChangePage: (page: number) => void;
}

const PaginationItem = ({
  number,
  onChangePage,
  isCurrentPage = false,
}: PaginationItemProps) => {
  return isCurrentPage ? (
    <Button
      size="sm"
      fontSize={"xs"}
      w="4"
      colorScheme={"pink"}
      disabled
      _disabled={{ bg: "pink.500", cursor: "default" }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize={"xs"}
      w="4"
      bg={"gray.700"}
      onClick={() => onChangePage(number)}
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  );
};

export default PaginationItem;
