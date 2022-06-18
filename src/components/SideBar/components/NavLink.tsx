import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkPorps,
  Text,
} from "@chakra-ui/react";
import React, { ElementType } from "react";
import ActiveLink from "../../ActiveLink";

interface NavLinkProps extends ChakraLinkPorps {
  children: string;
  icon: ElementType;
  navigateTo: string;
}

const NavLink = ({ children, icon, navigateTo, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={navigateTo} passHref>
      <ChakraLink display={"flex"} alignItems={"center"} {...rest} as="a">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight={"medium"}>
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};

export default NavLink;
