import { Box, HStack, Grid, GridItem, Text, IconButton, Input, InputGroup, InputRightElement, VStack, Card, Image, CardBody, Heading, AspectRatio, CardFooter, Badge, Progress } from '@chakra-ui/react'
import React from 'react'
import Layout from './Layout'
import { PlusSquareIcon, SearchIcon } from "@chakra-ui/icons"
import "../index.css"

const Training = () => {
  return (
    <Layout>
      <VStack
      padding="24px"
      maxHeight="100%" width={'100%'} justifyContent={'flex-start'} alignItems={'flex-start'} overflow="scroll"
      paddingBottom="300px"
      >

        <HStack
        marginBottom="12px"
        maxWidth="100%" padding='0' justifyContent="flex-start">
          <InputGroup maxWidth="200px">
            <Input
            p="6px" placeholder="keyword"/>
            <InputRightElement>
              <IconButton size="sm" icon={<SearchIcon size="18px"/>} />
            </InputRightElement>
          </InputGroup>
          <Box>Bookmark</Box>
          <Box>Popular</Box>
        </HStack>

        <VStack maxWidth="1200px" padding="0" justifyContent="flex-start" alignItems="flex-start" paddingBottom="20px">
          <Text as="h1" textAlign="left" fontSize="32px" fontWeight="bold">Recommend</Text>
          <HStack width="full" gap="12px" overflow="scroll" padding={'0px 100px 12px 10px'}>
            {[0,1,2,3,4,5].map((item, index) => {
              return (
                <Box minWidth="200px" key={index}>
                  <Card direction={'column'} minWidth="full" overflow="hidden">
                    <AspectRatio ratio={2/1}>
                      <Image  src={'https://source.unsplash.com/random/'+index} objectFit="cover" />
                    </AspectRatio>
                    <CardBody width="full" p='12px'>
                      <HStack width="full" justifyContent="space-between">
                        <Heading size="md" fontSize="18px" width="100%">The Perfect Title</Heading>
                        <IconButton icon={<PlusSquareIcon />} size="sm" />
                      </HStack>
                    </CardBody>
                    <CardFooter width="full" p="12px" pt="0px">
                      <HStack width="full" justifyContent="flex-start">
                        <Badge>UI/UX</Badge>
                        <Badge style={{ backgroundColor: 'var(--theme-color)', color: 'white'}}>Management</Badge>
                      </HStack>
                    </CardFooter>
                  </Card>
                </Box>
              )
            })}
          </HStack>
        </VStack>

        <VStack maxWidth="1200px" padding="0" justifyContent="flex-start" alignItems="flex-start" paddingBottom="20px">
          <Text as="h1" textAlign="left" fontSize="32px" fontWeight="bold">In Progress</Text>
          <HStack width="full" gap="12px" overflow="scroll" padding={'0px 100px 12px 10px'}>
            {[0,1,2,3,4,5].map((item, index) => {
              return (
                <Box minWidth="200px" key={index}>
                  <Card direction={'column'} minWidth="full" overflow="hidden">
                    <AspectRatio ratio={2/1}>
                      <Image  src={'https://source.unsplash.com/random/'+index+index} objectFit="cover" />
                    </AspectRatio>
                    <CardBody width="full" p='12px'>
                      <HStack width="full" justifyContent="space-between">
                        <Heading size="md" fontSize="18px" width="100%">The Perfect Title</Heading>
                        <IconButton icon={<PlusSquareIcon />} size="sm" />
                      </HStack>
                      <HStack width="full" justifyContent="space-between">
                        <Progress width="100%" height="5px" borderRadius="20px" value={20} size="md" colorScheme="pink" />
                        <Text fontSize={'12px'} color="#cbcbcb">2/5</Text>
                      </HStack>
                    </CardBody>
                    <CardFooter width="full" p="12px" pt="0px">
                      <HStack width="full" justifyContent="flex-start">
                        <Badge>UI/UX</Badge>
                        <Badge style={{ backgroundColor: 'var(--theme-color)', color: 'white'}}>Management</Badge>
                      </HStack>
                    </CardFooter>
                  </Card>
                </Box>
              )
            })}
          </HStack>
        </VStack>

        <VStack maxWidth="1200px" padding="0" justifyContent="flex-start" alignItems="flex-start" paddingBottom="20px">
          <Text as="h1" textAlign="left" fontSize="32px" fontWeight="bold">Completed</Text>
          <HStack width="full" gap="12px" overflow="scroll" padding={'0px 100px 12px 10px'}>
            {[0,1,2,3,4,5].map((item, index) => {
              return (
                <Box minWidth="200px" key={index}>
                  <Card direction={'column'} minWidth="full" overflow="hidden">
                    <AspectRatio ratio={2/1}>
                      <Image  src={'https://source.unsplash.com/random/'+index+index+index} objectFit="cover" />
                    </AspectRatio>
                    <CardBody width="full" p='12px'>
                      <HStack width="full" justifyContent="space-between">
                        <Heading size="md" fontSize="18px" width="100%">The Perfect Title</Heading>
                        <IconButton icon={<PlusSquareIcon />} size="sm" />
                      </HStack>
                      <HStack width="full" justifyContent="space-between">
                        <Progress width="100%" height="5px" borderRadius="20px" value={100} size="md" colorScheme="green" />
                        <Text fontSize={'12px'} color="green">Completed</Text>
                      </HStack>
                    </CardBody>
                    <CardFooter width="full" p="12px" pt="0px">
                      <HStack width="full" justifyContent="flex-start">
                        <Badge>UI/UX</Badge>
                        <Badge style={{ backgroundColor: 'var(--theme-color)', color: 'white'}}>Management</Badge>
                      </HStack>
                    </CardFooter>
                  </Card>
                </Box>
              )
            })}
          </HStack>
        </VStack>

      </VStack>
    </Layout>
  )
}

export default Training