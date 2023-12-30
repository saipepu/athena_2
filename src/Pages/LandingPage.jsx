import { Box, HStack, Text, VStack, Image, Button } from '@chakra-ui/react'
import hero from '../assets/hero.png'
import React from 'react'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigation = useNavigate();
  return (
    <VStack width="full" height="full">
      <HStack position="fixed" width="full" padding="5" paddingX="20" flexDirection="row" justifyContent="space-between">
        <Box margin="0" height="full" display="grid">
          <svg
            style={{ margin: "auto" }}
            height="30px"
            viewBox="0 0 1238 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1606_8)">
              <path d="M784.8 0.300049H628.8V30.3H784.8V0.300049Z" fill="black" />
              <path d="M751.8 93.3H628.8V123.3H751.8V93.3Z" fill="black" />
              <path d="M784.8 194.3H628.8V224.3H784.8V194.3Z" fill="black" />
              <path
                d="M226.5 30.3H286.5V224.5H323.2V30.3H382.9V0.300049H226.5V30.3Z"
                fill="black"
              />
              <path
                d="M562.3 96.5H456.8V0.300049H420V224.5H456.8V126.5H562.3V224.5H599.1V0.300049H562.3V96.5Z"
                fill="black"
              />
              <path
                d="M962.6 167.1L852 0H815.2V224.5H852V57.1L962.6 224.5H999.4V0H962.6V167.1Z"
                fill="black"
              />
              <path
                d="M1157.5 0H1114.9L1034.6 224.5H1073L1089.1 178.7H1183L1199.1 224.5H1237.8L1157.5 0ZM1099.4 148.7L1136.2 44.5L1172.7 148.7H1099.4Z"
                fill="black"
              />
              <path
                d="M122.9 0H80.3L55.9 68.3H93.2L101.6 44.5L138.1 148.7H64.8L79.1 108.3H41.6L0 224.5H38.4L54.5 178.7H148.4L164.5 224.5H203.2L122.9 0Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1606_8">
                <rect width="1237.8" height="224.5" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Box>
        <HStack gap="10">
          <Text whiteSpace="nowrap">About us</Text>
          <Text>FAQ</Text>
          <Text>Blog</Text>
        </HStack>
      </HStack>
      <HStack width="full" height="full" paddingX="20">
        <VStack flex="1" flexDirection="column" alignItems="flex-start">
          <Text lineHeight="100%" fontSize="56px" fontWeight="bold" width="full" textAlign="left"><span style={{ color: "#EE5253" }}>Gamify</span> Your<br /> Learning</Text>
          <Text paddingBottom="20px" fontSize="18px" width="full" textAlign="left">The new experience of corporate academy  </Text>
          <Button borderRadius="100px" paddingX="20px" textColor="#fff" backgroundColor="#EE5253" onClick={() => navigation('/sign-up')}>Sign Up</Button>
        </VStack>
        <Box flex="1">
          <Image src={hero} objectFit="contain" height="80vh" width="auto" margin="auto" />
        </Box>
      </HStack>
    </VStack>
  )
}

export default LandingPage