import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Layout from "./Layout";
import athena_avatar_page from '../assets/athena_avatar_page.png'

const Rewards = () => {
  return (
  <Layout>
    <Box width="100%" height="100%'">
      <Image src={athena_avatar_page} alt={`${athena_avatar_page}`} />
    </Box>
  </Layout>
  )
};

export default Rewards;
