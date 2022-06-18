import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import Sidebar from "../components/SideBar";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    foreColot: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [
  {
    name: "series1",
    data: [40, 30, 50, 49, 60, 45, 70, 91],
  },
];
const series2 = [
  {
    name: "series2",
    data: [2, 10, 2, 100, 20, 12, 50, 91],
  },
];

const Dashboard: React.FC = () => {
  return (
    <Flex direction={"column"} h="100vh">
      <Header />

      <Flex w="100%" my="8" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex={1}
          gap="4"
          minChildWidth="230px"
          alignItems="flex-start"
        >
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize={"lg"} mb="4">
              Subscribers of the week
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize={"lg"} mb="4">
              Open rate
            </Text>
            <Chart
              options={options}
              series={series2}
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
