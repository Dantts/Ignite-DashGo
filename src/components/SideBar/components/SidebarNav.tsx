import { Stack } from "@chakra-ui/react";
import React from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

const SidebarNav: React.FC = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink navigateTo="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink navigateTo="/users" icon={RiContactsLine}>
          Users
        </NavLink>
      </NavSection>

      <NavSection title="AUTOMATION">
        <NavLink navigateTo="/forms" icon={RiInputMethodLine}>
          Forms
        </NavLink>
        <NavLink navigateTo="/automation" icon={RiGitMergeLine}>
          Automation
        </NavLink>
      </NavSection>
    </Stack>
  );
};

export default SidebarNav;
