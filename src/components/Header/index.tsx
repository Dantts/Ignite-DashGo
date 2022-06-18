import React from "react";
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import Logo from "./components/Logo";
import SearchBox from "./components/SearchBox";
import Profile from "./components/Profile";
import NotificationsNav from "./components/NotificationsNav";
import { useSidebarDrawer } from "../../contexts/sidebarDrawerContetxt";
import { RiMenuLine } from "react-icons/ri";

const Header: React.FC = () => {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align={"center"}
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open sidebar"
          fontSize="24"
          variant={"unstyled"}
          icon={<Icon as={RiMenuLine} />}
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align={"center"} ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};

export default Header;
