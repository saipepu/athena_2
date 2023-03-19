import { Box, Button, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Layout from './Layout'

const CourseDetail = () => {

  const { state } = useLocation();
  const { course_id, role, id } = useParams();
  const [game, setGame] = useState("");
  const navigation = useNavigate();


  var course = {
    author: "",
    image_url: "https://miro.medium.com/v2/resize:fit:1400/0*sEFwlPrVqLc0SlBp",
    title: "Human Relations Movement: 5 Steps To better Management",
    intro: "Human relations was a watershed moment in management history. What is it, and how has it affected management?",
    description: "The human relations movement was a watershed moment in management history and a big factor in today’s leadership style.\nThe behavioural sciences have aided managers and theorists in understanding how to boost productivity by focusing less on organizations and more on people. Contemporary theories, such as contingency theory and systems theory, place a greater emphasis on the role and impact of each employee in a firm and how they may achieve their objectives while also benefitting the company.",
    video_url: <iframe width="560" height="300" src="https://www.youtube.com/embed/Jp9b2Hf7QWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    game: game,
    game_url: ""
  }
  course = state;
  
  return (
    <Layout>
      <VStack
        width="full" height="full" justifyContent='flex-start' alignItem='flex-start' overflow="scroll"
        padding="50px 150px" paddingBottom={'120px'}
      >
        <Box width="full" textAlign={'left'}>
          Author
        </Box>
        <Text width="full" textAlign={'left'} fontSize="32px" fontWeight="bold">
          {course?.title}
        </Text>
        <Box width="full">
          <Text width="full" fontSize="20px" color="#6c6c6c" textAlign={'left'}>
            {course?.intro}
          </Text>
        </Box>
        <Box padding="20px" width="100%" display="grid">
          <Image src={course?.image_url} alt="image" width="600px" height="300px" margin="auto" objectFit="cover"/>
        </Box>
        <Box width="full">
          <Text width="full" textAlign={'left'} fontSize="20px" color="#6c6c6c">
            {course?.description}
          </Text>
        </Box>
        <Box padding="50px 0px" dangerouslySetInnerHTML={{ __html: course?.video_url }}>
          
        </Box>
        <Text>The End</Text>
        <Box width="full" display="flex">
          <Button onClick={() => navigation(`/${role}/${id}/${course.game_type}`)} style={{ marginLeft: 'auto', backgroundColor: 'var(--theme-color)', color: 'white'}}>Play Quiz Game</Button>
        </Box>
      </VStack>
    </Layout>
  )
}

export default CourseDetail