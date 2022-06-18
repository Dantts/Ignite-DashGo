import { useDisclosure, UseDisclosureProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

const SidebarDrawerContext = createContext({} as sidebarDrawerContextData);

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type sidebarDrawerContextData = UseDisclosureProps;

export const SidebarDrawerProvider = ({
  children,
}: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
