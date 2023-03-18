import { Box, Button, FormControl, FormLabel, HStack, Input, Switch, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../api/Registeration'

const SignUp = () => {

  const navigation = useNavigate();
  const [response, setResponse] = useState();
  const [errorMessage, setErrorMessage] = useState(null)
  const [isHR, setIsHR] = useState(false);

  const formStyle = {
    margin: "auto",
    width: '100%',
    padding: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }

  const Employee = {
    rank: 0,
    name: "",
    email: "",
    password: "",
    department: "",
    position: "",
    exp: 0,
  }
  const HR = {
    name: "",
    email: "",
    password: ""
  }

  const formik = useFormik({
    initialValues: isHR ? HR : Employee,
    onSubmit: async(values) => {
      console.log(values, 'submitted')
      signUp(values, setResponse, isHR);
      console.log(response)
      // navigation('/sign-in')
    }
  })

  useEffect(() => {
    let signUp = JSON.parse(localStorage.getItem('athena-token'));
    if( signUp != null) {
      const [role, data] = Object.entries(signUp)[0]
      console.log(role, data._id);
      navigation(`/dashboard/${role}/${data._id}`)
    }

    console.log(response);
    if(response?.signUpSuccess) {
      navigation('/sign-in')
    } else {
      setErrorMessage(response?.message);
    }
  }, [response, navigation])

  const handleSwitch = () => {
    setIsHR(!isHR);
  }

  return (
      <HStack width="100%" height="100%">
        <Box width="100%" height="100%" display="grid" flex="1">
          <svg style={{ margin: 'auto' }} height="100" viewBox="0 0 1238 225" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1606_8)">
            <path d="M784.8 0.300049H628.8V30.3H784.8V0.300049Z" fill="black"/>
            <path d="M751.8 93.3H628.8V123.3H751.8V93.3Z" fill="black"/>
            <path d="M784.8 194.3H628.8V224.3H784.8V194.3Z" fill="black"/>
            <path d="M226.5 30.3H286.5V224.5H323.2V30.3H382.9V0.300049H226.5V30.3Z" fill="black"/>
            <path d="M562.3 96.5H456.8V0.300049H420V224.5H456.8V126.5H562.3V224.5H599.1V0.300049H562.3V96.5Z" fill="black"/>
            <path d="M962.6 167.1L852 0H815.2V224.5H852V57.1L962.6 224.5H999.4V0H962.6V167.1Z" fill="black"/>
            <path d="M1157.5 0H1114.9L1034.6 224.5H1073L1089.1 178.7H1183L1199.1 224.5H1237.8L1157.5 0ZM1099.4 148.7L1136.2 44.5L1172.7 148.7H1099.4Z" fill="black"/>
            <path d="M122.9 0H80.3L55.9 68.3H93.2L101.6 44.5L138.1 148.7H64.8L79.1 108.3H41.6L0 224.5H38.4L54.5 178.7H148.4L164.5 224.5H203.2L122.9 0Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_1606_8">
            <rect width="1237.8" height="224.5" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </Box>
        <Box width="100%" height="100%" display="grid" flex="1">
          <form onSubmit={formik.handleSubmit}
            style={formStyle}>
            <Text fontSize="32px" fontWeight="bold">SignUp</Text>

            <FormControl variant="unstyled" padding="12px 0px" display="flex" justifyContent='flex-start' alignItems="center" gap="12px">
              <Switch id="switch" colorScheme="green" border="none" padding="0px" margin="0px"
                onChange={() => handleSwitch()}
                isChecked={isHR}
              />
              <FormLabel variant="unstyled" padding="0px" margin="0px" border="none" htmlFor="switch">Sign Up as HR</FormLabel>
            </FormControl>

            <label htmlFor="name" style={{ color: '#cbcbcb', width: '100%', borderRadius: 0, textAlign: 'left', border: 'none', marginBottom: '0px', padding: 0, fontSize: '20px'}}>Name</label>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              required
              value={formik.values.name}
              style={{
                width: '100%',
                backgroundColor: 'white',
                fontSize: '18px',
                padding: '12px',
                borderRadius: '5px',
                border: '0.8px solid #4d4d4d',
                marginBottom: '12px'
              }}
            />

            <label htmlFor="email" style={{ color: '#cbcbcb', width: '100%', borderRadius: 0, textAlign: 'left', border: 'none', marginBottom: '0px', padding: 0, fontSize: '20px'}}>Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              required
              value={formik.values.email}
              style={{
                width: '100%',
                backgroundColor: 'white',
                fontSize: '18px',
                padding: '12px',
                borderRadius: '5px',
                border: '0.8px solid #4d4d4d',
                marginBottom: '12px'
              }}
            />

            <label htmlFor="password" style={{ color: '#cbcbcb', width: '100%', borderRadius: 0, textAlign: 'left', border: 'none', marginBottom: '0px', padding: 0, fontSize: '20px'}}>Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              required
              value={formik.values.password}
              style={{
                width: '100%',
                backgroundColor: 'white',
                fontSize: '18px',
                padding: '12px',
                borderRadius: '5px',
                border: '0.8px solid #4d4d4d',
                marginBottom: '12px'
              }}
            />

            {!isHR ? (
              <>
                <label htmlFor="department" style={{ color: '#cbcbcb', width: '100%', borderRadius: 0, textAlign: 'left', border: 'none', marginBottom: '0px', padding: 0, fontSize: '20px'}}>Department</label>
                <Input
                  id="department"
                  name="department"
                  type="department"
                  onChange={formik.handleChange}
                  required
                  value={formik.values.department}
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    fontSize: '18px',
                    padding: '12px',
                    borderRadius: '5px',
                    border: '0.8px solid #4d4d4d',
                    marginBottom: '12px'
                  }}
                />

                <label htmlFor="position" style={{ color: '#cbcbcb', width: '100%', borderRadius: 0, textAlign: 'left', border: 'none', marginBottom: '0px', padding: 0, fontSize: '20px'}}>Position</label>
                <Input
                  id="position"
                  name="position"
                  type="position"
                  onChange={formik.handleChange}
                  required
                  value={formik.values.position}
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    fontSize: '18px',
                    padding: '12px',
                    borderRadius: '5px',
                    border: '0.8px solid #4d4d4d',
                    marginBottom: '12px'
                  }}
                />
            </>
            ) : (
              ""
            )}
            

            <Button style={{ marginBottom: '6px', backgroundColor: "var(--theme-color)", color: 'white', fontSize: '20px', width: '100%', padding: '12px',}} type="submit">Submit</Button>
            <Text fontSize="18px" color="#cbcbcb" fontWeight="normal">Already have an account? <a href="/#/sign-in" style={{ textDecorationLine: 'underline'}}>Sign In</a></Text>
            <Text fontSize="18px" color="red">{errorMessage}</Text>
          </form>
        </Box>
      </HStack>
  )
}

export default SignUp