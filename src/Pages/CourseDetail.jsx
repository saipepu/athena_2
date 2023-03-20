import { Box, Button, Checkbox, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { updateEmployee } from '../api/server_routes';
import Layout from './Layout'
import { TimerContext } from '../context/TimerContext'
import _ from 'lodash';


const CourseDetail = () => {

  const startTime = new Date().getTime();
  localStorage.setItem('startTime', startTime);

  const { state } = useLocation();
  const { course_id, role, id } = useParams();
  const [watch, setWatched] = useState(false);
  const [read, setRead] = useState(false);
  const [quiz, setQuiz] = useState(false);
  const [response, setResponse] = useState();
  const [trigger, setTrigger] = useState(false);
  const [first, setFirst] = useState(true);
  const [load, setLoading] = useState(false);
  const [changed, setChange] = useState(true);
  const navigation = useNavigate();

  var course = state?.blog;
  var employee = state?.employee
  console.log(employee);

  const handleChange = (action) => {
    setChange(true);
    console.log(action);
    switch(action) {
      // eslint-disable-next-line no-lone-blocks
      case "watched": {
        setWatched(!watch);
        break;
      };
      // eslint-disable-next-line no-lone-blocks
      case "read": {
        setRead(!read);
        break;
      };
      // eslint-disable-next-line no-lone-blocks
      case "won": {
        setQuiz(true);
        break;
      };
      // eslint-disable-next-line no-lone-blocks
      case "trigger": {
        setLoading(true);
        setTimeout(() => {
          setTrigger(!trigger);
        }, 1000);
        break;
      };
      default: break
    }
  }

  useEffect(() => {
    if(!first) {
      const handleToggle = () => {
        for(let x in employee?.inProgress) {
          // eslint-disable-next-line eqeqeq
          if(course_id == employee?.inProgress[x].course_id) {
            console.log(watch, read, quiz);
            employee.inProgress[x].reading = read
            employee.inProgress[x].video = watch
          }
        }
          updateEmployee(role, id, employee, setResponse);
      }
      handleToggle();
    } else {
      setFirst(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger])
  
  useEffect(() => {
    setLoading(false);
    setChange(false);
  }, [response])

  useEffect(() => {
    for(let x in employee?.inProgress) {
      // eslint-disable-next-line eqeqeq
      if(course_id == employee?.inProgress[x].course_id) {
        setRead(employee.inProgress[x].reading)
        setWatched(employee.inProgress[x].video)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employee])
  
  return (
    <Layout>
      <VStack
        width="full" height="full" justifyContent='flex-start' alignitem='flex-start' overflow="scroll"
        padding="50px 150px" paddingBottom={'120px'}
      >
        <Box width="full" textAlign={'left'}>
          By - {course?.author}
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
        <Box padding="50px 0px 0px 0px" dangerouslySetInnerHTML={{ __html: course?.video_url }}>
        </Box>
        <Box cursor={'pointer'} onClick={() => handleChange('watched')} width="560px" display="flex" justifyContent={'flex-end'} gap="12px">
          <text htmlFor="checkbox">Mark as Watched</text>
          <input type="checkbox" id="checkbox" checked={watch} readOnly/>
        </Box>
        <Box cursor={'pointer'} onClick={() => handleChange('read')} width="560px" display="flex" justifyContent={'flex-end'} gap="12px">
          <text htmlFor="checkbox">Mark as Read</text>
          <input type="checkbox" id="checkbox" checked={read} readOnly/>
        </Box>
        <Box width="560px" display="flex">
          <Button onClick={() => handleChange('trigger')} fontSize="12px" padding="2px 24px" style={{ marginLeft: 'auto', backgroundColor: 'blue.200', color: 'blue.500'}}
          isLoading={load}
          >{response ? response?.updateSuccess === false ? "Try Again" : changed ? "Saved Progress" : "Saved" : "Save Progress"}</Button>
        </Box>
        <Text>The End</Text>
        <Box width="full" display="flex">
          <Button onClick={() => navigation(`/${role}/${id}/${course.game_type}`, { state: {course_id: course_id, employee: employee}})} style={{ marginLeft: 'auto', backgroundColor: 'var(--theme-color)', color: 'white'}}>Play Quiz Game</Button>
        </Box>
      </VStack>
    </Layout>
  )
}

export default CourseDetail