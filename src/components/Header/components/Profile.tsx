import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align={"center"}>
      {showProfileData && (
        <Box mr="4" textAlign={"right"}>
          <Text>Gabriel Duarte</Text>
          <Text color={"gray.300"} fontSize="small">
            Dantts@email.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Gabriel Duarte"
        src="https://github.com/Dantts.png"
      />
    </Flex>
  );
};

export default Profile;
