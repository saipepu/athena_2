import { Box, HStack, Text, IconButton, Input, InputGroup, InputRightElement, VStack, Card, Image, CardBody, Heading, AspectRatio, CardFooter, Badge, Progress } from '@chakra-ui/react'
import React from 'react'
import Layout from './Layout'
import { CheckCircleIcon, CheckIcon, MinusIcon, PlusSquareIcon, SearchIcon } from "@chakra-ui/icons"
import "../index.css"
import { useNavigate } from 'react-router-dom'

const Training = () => {
  const navigation = useNavigate();


  const blog1 = {
    author: " Chirst Voss, Dan Shapiro & more!",
    title: "How to win a negotiation",
    intro: "Successful negotiation is not about getting to yes,It’s about mastering no and understanding what path to an agreement is.",
    description: "There are many variables in every negotiation, which means there is no silver bullet or magic erase you can use to win. The idea of “Winning” changes depending on the situation, the key to success is been able to identify the type of negotiation and use a strategy that gets you what you want.",
    image_url: "https://bigthink.com/wp-content/uploads/2020/08/origin-122.jpg",
    video_url: "",
    game_type: "water-rising",
    game_data: "",
  }


  return (
    <Layout>
      <VStack
      maxHeight="100%" width={'100%'} justifyContent={'flex-start'} alignItems={'flex-start'} overflow="scroll"
      padding="24px 0px 300px 24px"
      >

        <HStack
        marginBottom="12px"
        maxWidth="100%" padding='0' justifyContent="flex-start">
          <InputGroup maxWidth="200px">
            <Input
            p="6px" placeholder="keyword"
            style={{
              backgroundColor: 'white',
              fontSize: '18px',
              borderRadius: '5px',
              border: '0.8px solid #cbcbcb'
            }}/>
            <InputRightElement>
              <IconButton aria-label='Search database' icon={<SearchIcon />} />
            </InputRightElement>
          </InputGroup>
          <Box>Bookmark</Box>
          <Box>Popular</Box>
        </HStack>

        <VStack maxWidth="100%" padding="0" justifyContent="flex-start" alignItems="flex-start" paddingBottom="20px">
          <Text as="h1" textAlign="left" fontSize="32px" fontWeight="bold">Recommend</Text>
          <HStack maxWidth="100%" gap="12px" overflow="scroll" padding={'0px 50px 12px 10px'}>
                <Box>
                  <Card height="270px" width="300px" onClick={() => navigation(`/course-detail/${1}`)} cursor={'pointer'} direction={'column'} minWidth="full" overflow="hidden" borderRadius="10px">
                    <AspectRatio ratio={2/1}>
                      <Image  src={blog1.image_url} objectFit="cover" />
                    </AspectRatio>
                    <CardBody width="full" p='12px' height="90px">
                      <HStack width="full" justifyContent="space-between" alignItems="flex-start">
                        <Heading size="md" fontSize="18px" width="100%" textAlign="left">{blog1.title}</Heading>
                        {/* <IconButton icon={<PlusSquareIcon />} size="sm" /> */}
                      </HStack>
                    </CardBody>
                    <CardFooter width="full" p="12px" pt="0px">
                      <HStack width="full" justifyContent="flex-start">
                        <Badge fontSize="8px">Negotiation</Badge>
                        <Badge fontSize="8px" style={{ backgroundColor: 'var(--theme-color)', color: 'white'}}>Management</Badge>
                      </HStack>
                    </CardFooter>
                  </Card>
                </Box>
            {[1,2,3,4,5].map((item, index) => {
              return (
                <Box key={index}>
                  <Card height="270px" width="300px" onClick={() => navigation(`/course-detail/${index}`)} cursor={'pointer'} direction={'column'} minWidth="full" overflow="hidden" borderRadius="10px">
                    <AspectRatio ratio={2/1}>
                      <Image  src={'https://source.unsplash.com/random/'+index} objectFit="cover" />
                    </AspectRatio>
                    <CardBody width="full" p='12px' height="90px">
                      <HStack width="full" justifyContent="space-between" alignItems="flex-start">
                        <Heading size="md" fontSize="18px" width="100%" textAlign="left">Human Relations Movement: 5 Steps To better Management</Heading>
                        {/* <IconButton icon={<PlusSquareIcon />} size="sm" /> */}
                      </HStack>
                    </CardBody>
                    <CardFooter width="full" p="12px" pt="0px">
                      <HStack width="full" justifyContent="flex-start">
                        <Badge fontSize="8px">UI/UX</Badge>
                        <Badge fontSize="8px" style={{ backgroundColor: 'var(--theme-color)', color: 'white'}}>Management</Badge>
                      </HStack>
                    </CardFooter>
                  </Card>
                </Box>
              )
            })}
          </HStack>
        </VStack>

        <VStack maxWidth="100%" padding="0" justifyContent="flex-start" alignItems="flex-start" paddingBottom="20px">
          <Text as="h1" textAlign="left" fontSize="32px" fontWeight="bold">In Progress</Text>
          <HStack maxWidth="100%" gap="12px" overflow="scroll" padding={'0px 50px 12px 10px'}>
            {[0,1,2].map((item, index) => {
              return (
                <Box key={index}>
                  <Card width="350px" onClick={() => navigation(`/course-detail/${index}`)} cursor={'pointer'} direction={'column'} minWidth="full" overflow="hidden" borderRadius="10px">
                    <AspectRatio ratio={4/1}>
                      <Image src={'https://source.unsplash.com/random/'+index+index} objectFit="cover" />
                    </AspectRatio>
                      <CardBody width="full" p='12px'>
                        <HStack width="full" marginBottom="6px" justifyContent="space-between" alignItems="flex-start">
                          <Heading size="md" fontSize="18px" width="100%" textAlign="left" isTruncated>Human Relations Movement: 5 Steps To better Management</Heading>
                        </HStack>
                        <HStack width="full" display="flex" justifyContent="flex-start" alignItems="flex-start">
                          <Box flex="1" maxWidth="105px" color="green.500" bgColor="green.100" gap="6px" padding="0px 12px" borderRadius="5px" display="flex" flexDir="row" alignItems={'center'}>
                            <Text fontSize="14px" fontWeight="bold">Reading</Text>
                            <CheckIcon boxSize="14px" stroke="1px solid black"/>
                          </Box>
                          <Box color="gray.400" bgColor="gray.100" gap="6px" padding="0px 12px" borderRadius="5px" display="flex" flexDir="row" alignItems={'center'}>
                            <Text fontSize="14px" fontWeight="bold">Video</Text>
                            <MinusIcon boxSize="14px" stroke="1px solid black"/>
                          </Box>
                          <Box color="gray.400" bgColor="gray.100" gap="6px" padding="0px 12px" borderRadius="5px" display="flex" flexDir="row" alignItems={'center'}>
                            <Text fontSize="14px" fontWeight="bold">Quiz</Text>
                            <MinusIcon boxSize="14px" stroke="1px solid black"/>
                          </Box>
                        </HStack>
                      </CardBody>
                      <CardFooter width="full" p="12px" pt="0px">
                      <HStack width="full" justifyContent="flex-start">
                        <Badge fontSize="8px">UI/UX</Badge>
                        <Badge fontSize="8px" style={{ backgroundColor: 'var(--theme-color)', color: 'white'}}>Management</Badge>
                      </HStack>
                    </CardFooter>
                  </Card>
                </Box>
              )
            })}
          </HStack>
        </VStack>

        <VStack maxWidth="100%" padding="0" justifyContent="flex-start" alignItems="flex-start" paddingBottom="20px">
          <Text as="h1" textAlign="left" fontSize="32px" fontWeight="bold">Completed</Text>
          <HStack maxWidth="100%" gap="12px" overflow="scroll" padding={'0px 50px 12px 10px'}>
            {[0,1].map((item, index) => {
              return (
                <Box key={index}>
                  <Card width="200px" onClick={() => navigation('/course-detail')} cursor="pointer" direction={'column'} minWidth="full" overflow="hidden">
                    <AspectRatio ratio={2/1}>
                      <Image  src={'https://source.unsplash.com/random/'+index+index+index} objectFit="cover" />
                    </AspectRatio>
                    <CardBody width="full" p='12px'>
                      <HStack width="full" justifyContent="space-between" alignItems="flex-start">
                        <Heading size="md" fontSize="18px" width="100%" textAlign="left" isTruncated>Human Relations Movement: 5 Steps To better Management</Heading>
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