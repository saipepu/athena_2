import { Box, HStack, Text, VStack, Card, Image, CardBody, Heading, AspectRatio, CardFooter, Badge, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { CheckIcon, MinusIcon } from "@chakra-ui/icons"
import "../index.css"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchOneEmployee, updateEmployee } from '../api/server_routes'

const Training = () => {

  const { role, id } = useParams();
  const { state } = useLocation();
  const navigation = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [response, setResponse] = useState();
  // eslint-disable-next-line no-unused-vars
  const [employee, setEmployee] = useState(state?.employee)
  const [haveComplete, setHaveComplete] = useState(true);
  const [first, setFirst] = useState(true);
  const [changeTab, setChangeTab] = useState(false);

  useEffect(() => {
    if(first) {
      setFirst(false);
      fetchOneEmployee(role, id, employee);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeTab, role, id])

  const blog1 = {
    author: "Chirst Voss, Dan Shapiro & more!",
    title: "How to win a negotiation",
    intro: "Successful negotiation is not about getting to yes,It’s about mastering no and understanding what path to an agreement is.",
    description: "There are many variables in every negotiation, which means there is no silver bullet or magic erase you can use to win. The idea of “Winning” changes depending on the situation, the key to success is been able to identify the type of negotiation and use a strategy that gets you what you want.",
    image_url: "https://bigthink.com/wp-content/uploads/2020/08/origin-122.jpg",
    video_url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/69fKNJuhdAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    game_type: "water-rising",
    game_id: "1ydjnm6UyE5pm5-onpFT-w3KdBSNzxU-fsj6KAvtb9mA",
  }

  const blog2 = {
    author: "Patrick David",
    title: "How to handle customers",
    intro: "There’s little emphasis on customer complaints and that can highly affect business.",
    description: "There are many ways to handle customer complaints. There are many variables and it is difficult to deal with different characters and personalities, however, creating and adhering to a set of protocols, it can help alleviate the hardship and elevate customer’s experiences.",
    image_url: "https://s25180.pcdn.co/wp-content/uploads/2016/03/iStock-86048857.jpg",
    video_url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kx7-S9jvVXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    game_type: "story-based",
    game_id: "1q0gdTTfZnGJuieaCY3DdHPaVOPJq1Qg35zlfPMGjy8s",
  }
  const blogList = [blog1, blog2]

  const handleClick = (blog) => {
    if(employee) {
      console.log('click', blog, blogList[blog-1]);
      const obj = {
        course_id: blog,
        reading: false,
        video: false,
        quiz: false
      }
      let list = [];
      for (let x in employee?.inProgress) {
        list.push(employee?.inProgress[x].course_id);
      }
      if (!list.includes(blog)) {
        employee?.inProgress.push(obj);
        updateEmployee(role, id, employee, setResponse);
      }
      console.log(employee, 58);
      navigation(`/course-detail/${blog}/${role}/${id}`, { state: { blog: blogList[blog-1], employee: employee} })
    }
  }

  useEffect(() => {
    let count = 0;
    for(let x=0; x<employee?.inProgress.length; x++) {
      if(employee.inProgress[x].reading && employee.inProgress[x].video && employee.inProgress[x].quiz) {
        count++;
      }
    }
    if(count > 0){
      setHaveComplete(true);
    } else {
      setHaveComplete(false);
    }
    console.log('Training')
  }, [employee])

  return (
    <Layout>
      <VStack
      maxHeight="100%" width={'100%'} justifyContent={'flex-start'} alignItems={'flex-start'} overflow="scroll"
      padding="24px 0px 300px 24px"
      >

        <Tabs variant="soft-rounded" colorScheme='blue'>
          <TabList>
            <Tab onClick={() => setChangeTab(!changeTab)}>Recommend</Tab>
            <Tab onClick={() => setChangeTab(!changeTab)}>In Progress</Tab>
            <Tab onClick={() => setChangeTab(!changeTab)}>Completed</Tab>
          </TabList>
          <TabPanels>

{/* Recommend */}
            <TabPanel>
              <VStack maxWidth="100%" padding="0" justifyContent="flex-start" alignItems="flex-start" paddingBottom="20px">
                <Text as="h1" textAlign="left" fontSize="32px" fontWeight="bold">Recommend</Text>
                <HStack maxWidth="100%" gap="12px" overflow="scroll" padding={'0px 50px 12px 10px'}>
                      {/* water rising */}
                      <Box>
                        <Card height="270px" width="300px" onClick={() => handleClick(1)} cursor={'pointer'} direction={'column'} minWidth="full" overflow="hidden" borderRadius="10px">
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
                      {/* storybased */}
                      <Box>
                        <Card height="270px" width="300px" onClick={() => handleClick(2)} cursor={'pointer'} direction={'column'} minWidth="full" overflow="hidden" borderRadius="10px">
                          <AspectRatio ratio={2/1}>
                            <Image  src={blog2.image_url} objectFit="cover" />
                          </AspectRatio>
                          <CardBody width="full" p='12px' height="90px">
                            <HStack width="full" justifyContent="space-between" alignItems="flex-start">
                              <Heading size="md" fontSize="18px" width="100%" textAlign="left">{blog2.title}</Heading>
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
                </HStack>
              </VStack>
            </TabPanel>
{/* In Progess */}
            <TabPanel>
              <VStack maxWidth="100%" padding="0" justifyContent="flex-start" alignItems="flex-start" paddingBottom="20px">
                <Text as="h1" textAlign="left" fontSize="32px" fontWeight="bold">In Progress</Text>
                {employee?.inProgress.length > 0 ? (
                  <HStack maxWidth="100%" gap="12px" overflow="scroll" padding={'0px 50px 12px 10px'}>
                    {employee?.inProgress.map((item, index) => {
                      let data;
                      if(item?.course_id === 1) {
                        data = blog1
                      }
                      if(item?.course_id === 2) {
                        data = blog2
                      }
                      if(item?.reading && item?.video && item?.quiz) {
                        return "";
                      } else {
                        return (
                          <Box key={index}>
                            <Card width="350px" onClick={() => handleClick(item?.course_id)} cursor={'pointer'} direction={'column'} minWidth="full" overflow="hidden" borderRadius="10px">
                              <AspectRatio ratio={4/1}>
                                <Image src={data.image_url} objectFit="cover" />
                              </AspectRatio>
                                <CardBody width="full" p='12px'>
                                  <HStack width="full" marginBottom="6px" justifyContent="space-between" alignItems="flex-start">
                                    <Heading size="md" fontSize="18px" width="100%" textAlign="left" isTruncated>{item.title}</Heading>
                                  </HStack>
                                  <HStack width="full" display="flex" justifyContent="flex-start" alignItems="flex-start">
                                    <Box flex="1" maxWidth="105px" bgColor={item.reading ? 'green.500' : 'gray.100'} color={item.reading ? 'white' : 'gray.500'} gap="6px" padding="0px 12px" borderRadius="5px" display="flex" flexDir="row" alignItems={'center'}>
                                      <Text fontSize="14px" fontWeight="bold">Reading</Text>
                                      {item.reading ? (
                                        <CheckIcon boxSize="14px" stroke="1px solid black"/>
                                      ) : (
                                        <MinusIcon boxSize="14px" stroke="1px solid black"/>
                                      )}
                                    </Box>
                                    <Box bgColor={item.video ? 'green.500' : 'gray.100'} color={item.video ? 'white' : 'gray.500'} gap="6px" padding="0px 12px" borderRadius="5px" display="flex" flexDir="row" alignItems={'center'}>
                                      <Text fontSize="14px" fontWeight="bold">Video</Text>
                                      {item.video ? (
                                        <CheckIcon boxSize="14px" stroke="1px solid black"/>
                                      ) : (
                                        <MinusIcon boxSize="14px" stroke="1px solid black"/>
                                      )}
                                    </Box>
                                    <Box bgColor={item.quiz ? 'green.500' : 'gray.100'} color={item.quiz ? 'white' : 'gray.500'} gap="6px" padding="0px 12px" borderRadius="5px" display="flex" flexDir="row" alignItems={'center'}>
                                      <Text fontSize="14px" fontWeight="bold">Quiz</Text>
                                      {item.quiz ? (
                                        <CheckIcon boxSize="14px" stroke="1px solid black"/>
                                      ) : (
                                        <MinusIcon boxSize="14px" stroke="1px solid black"/>
                                      )}                                  </Box>
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
                      }
                    })}
                  </HStack>
                ) : (
                  <Text fontSize="20px" color="gray" padding="30px 0px">No Courses are currently In-Progress. Start Learning something new!.</Text>
                )}
                <Text fontSize="12px" color="#4d4d4d80">Please refresh to See Changes!</Text>
              </VStack>
            </TabPanel>
{/* Completed */}
            <TabPanel>
              <VStack maxWidth="100%" padding="0" justifyContent="flex-start" alignItems="flex-start" paddingBottom="20px">
                <Text as="h1" textAlign="left" fontSize="32px" fontWeight="bold">Completed</Text>
                {haveComplete ? (
                  <HStack maxWidth="100%" gap="12px" overflow="scroll" padding={'0px 50px 12px 10px'}>
                    {employee?.inProgress.map((item, index) => {
                      let data;
                      if(item?.course_id === 1) {
                        data = blog1
                      }
                      if(item?.course_id === 2) {
                        data = blog2
                      }
                      if(item?.reading && item?.video && item?.quiz) {
                        return (
                          <Box key={index}>
                            <Card width="350px" onClick={() => handleClick(item?.course_id)} cursor={'pointer'} direction={'column'} minWidth="full" overflow="hidden" borderRadius="10px">
                              <AspectRatio ratio={4/1}>
                                <Image src={data.image_url} objectFit="cover" />
                              </AspectRatio>
                                <CardBody width="full" p='12px'>
                                  <HStack width="full" marginBottom="6px" justifyContent="space-between" alignItems="flex-start">
                                    <Heading size="md" fontSize="18px" width="100%" textAlign="left" isTruncated>{item.title}</Heading>
                                  </HStack>
                                  <HStack width="full" display="flex" justifyContent="flex-start" alignItems="flex-start">
                                    <Box flex="1" maxWidth="105px" bgColor={item.reading ? 'green.500' : 'gray.100'} color={item.reading ? 'white' : 'gray.500'} gap="6px" padding="0px 12px" borderRadius="5px" display="flex" flexDir="row" alignItems={'center'}>
                                      <Text fontSize="14px" fontWeight="bold">Reading</Text>
                                      {item.reading ? (
                                        <CheckIcon boxSize="14px" stroke="1px solid black"/>
                                      ) : (
                                        <MinusIcon boxSize="14px" stroke="1px solid black"/>
                                      )}
                                    </Box>
                                    <Box bgColor={item.video ? 'green.500' : 'gray.100'} color={item.video ? 'white' : 'gray.500'} gap="6px" padding="0px 12px" borderRadius="5px" display="flex" flexDir="row" alignItems={'center'}>
                                      <Text fontSize="14px" fontWeight="bold">Video</Text>
                                      {item.video ? (
                                        <CheckIcon boxSize="14px" stroke="1px solid black"/>
                                      ) : (
                                        <MinusIcon boxSize="14px" stroke="1px solid black"/>
                                      )}
                                    </Box>
                                    <Box bgColor={item.quiz ? 'green.500' : 'gray.100'} color={item.quiz ? 'white' : 'gray.500'} gap="6px" padding="0px 12px" borderRadius="5px" display="flex" flexDir="row" alignItems={'center'}>
                                      <Text fontSize="14px" fontWeight="bold">Quiz</Text>
                                      {item.quiz ? (
                                        <CheckIcon boxSize="14px" stroke="1px solid black"/>
                                      ) : (
                                        <MinusIcon boxSize="14px" stroke="1px solid black"/>
                                      )}                                  </Box>
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
                      } else {
                        return "";
                      }
                    })}
                  </HStack>
                ) : (
                  <Text fontSize="20px" color="gray" padding="30px 0px">You haven't completed any course. Start Learning something new!.</Text>
                )}
              </VStack>
            </TabPanel>

          </TabPanels>
        </Tabs>

      </VStack>
    </Layout>
  )
}

export default Training