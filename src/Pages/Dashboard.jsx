import { Card, CardBody, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import red_clock from '../assets/red_clock.png'
import token from '../assets/token.png'
import book from '../assets/book.png'
import RankTable from '../Components/RankTable/RankTable'
import Layout from './Layout'
// import { useMediaQuery } from '@chakra-ui/react'

const Dashboard = () => {
  // const [isSmallScreen] = useMediaQuery("(max-width: 758px)")
  return (
    <Layout>
      <VStack
          // bgColor="blue"
          className="scroll_container"
          style={{ color: 'black'}} height="100%" width={'100%'} justifyContent={'flex-start'} alignItems={'flex-start'} overflow="scroll">
          <HStack
          minWidth="800px" width="100%" maxWidth="1000px"
          spacing={'24px'} padding="24px">
            <Card bgColor="white" flex="1" minWidth="260px" direction={'row'} alignItems='center' justifyContent='flex-start' padding="12px 24px" borderRadius="8px" boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.15)" border="0.5px solid #00000010">
              <Image src={red_clock} objectFit="contain" alt="red_clock"/>
                <CardBody padding="12px">
                  <Heading fontSize={'16px'} fontWeight="normal" color="#A3AED0" whiteSpace="none !important">Hours of Training</Heading>
                  <Text as="p" fontSize={'36px'} lineHeight="100%" whiteSpace="none">12.1</Text>
                </CardBody>
            </Card>
            <Card bgColor="white" flex="1" minWidth="260px" direction={'row'} alignItems='center' justifyContent='flex-start' padding="12px 24px" borderRadius="8px" boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.15)" border="0.5px solid #00000010">
              <Image src={token} objectFit="contain" alt="red_clock"/>
                <CardBody padding="12px">
                  <Heading fontSize={'16px'} fontWeight="normal" color="#A3AED0" whiteSpace="none">Tokens</Heading>
                  <Text as="p" fontSize={'36px'} lineHeight="100%" whiteSpace="none">5</Text>
                </CardBody>
            </Card>
            <Card bgColor="white" flex="1" minWidth="260px" direction={'row'} alignItems='center' justifyContent='flex-start' padding="12px 24px" borderRadius="8px" boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.15)" border="0.5px solid #00000010">
              <Image src={book} objectFit="contain" alt="red_clock"/>
                <CardBody padding="12px">
                  <Heading fontSize={'16px'} fontWeight="normal" color="#A3AED0" whiteSpace="none">xp</Heading>
                  <Text as="p" fontSize={'36px'} lineHeight="100%" whiteSpace="none">3</Text>
                </CardBody>
            </Card>
          </HStack>
          <RankTable />
        </VStack>
    </Layout>
  )
}

export default Dashboard