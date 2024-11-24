import { Center, Loader } from "@mantine/core";
import React, { memo } from "react";
import "@mantine/core/styles/Center.css";
import "@mantine/core/styles/Loader.css";
const Loading = () => {
  return (
    <Center mih={"20rem"}>
      <Loader />
    </Center>
  );
};

export default memo(Loading);
