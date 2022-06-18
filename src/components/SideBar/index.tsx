import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarDrawer } from "../../contexts/sidebarDrawerContetxt";
import SidebarNav from "./components/SidebarNav";

const Sidebar: React.FC = () => {
  const { isOpen, onClose } = useSidebarDrawer();
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  return !isDrawerSideBar ? (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  ) : (
    <Drawer onClose={onClose} isOpen={isOpen} placement="left">
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
