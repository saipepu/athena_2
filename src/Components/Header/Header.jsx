import { Box, Button, Container, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
// import athena_logo from '../assets/athena_logo.svg'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../../api/Registeration'
import avatar from '../../assets/avatar.png'

const Header = ({ role, id }) => {

  const [response, setResponse] = useState()
  const [errorMessage, setErrorMessage] = useState();
  const navigation = useNavigate();

  const handleSignOut = async () => {
    localStorage.removeItem('athena-token')
    await signOut(setResponse, role);
  }

  useEffect(() => {
    console.log(response)
    if(response?.signOutSuccess) {
      navigation('/sign-in')
    }
  }, [response, navigation])

  return (
    <Container position="relative" maxW='full' minHeight={'85'} padding="0px 64px" bgColor={'white'} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.1)">
      <Box display="flex" justifyContent='flex-start' alignItems='center'>
        <svg height="35" viewBox="0 0 1238 225" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div style={{ position: 'absolute', color: 'red', top: '110%', right: '20px'}}>{errorMessage}</div>
      <Box height="100%" display="flex" justifyContent='center' alignItems='flex-end' color="black" paddingBottom="12px">
        <Box height="full" display="flex" flexDirection="column" justifyContent='flex-end'>
          <Text fontSize="12px" fontWeight="normal">5 Token</Text>
          <Text fontSize="24px" fontWeight="bold" lineHeight={'100%'}>Geo</Text>
        </Box>
        <Menu bgColor="red">
          {/* <MenuButton as={Button} backgroundColor="red" borderRadius="1000px">
            <Image src={avatar} alt="avatar" width="65px" />
          </MenuButton> */}
            
          <MenuButton bgColor="transparent" height="65px" width="65px" borderRadius="100%" as={Button} rightIcon={<Image src={avatar} alt="avatar" height="50px" />}>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleSignOut()}>
            Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Container>
  )
}

export default Header