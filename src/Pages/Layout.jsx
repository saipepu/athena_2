import { Container, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar'
import { useMediaQuery } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOneEmployee } from '../api/server_routes'
import { isAuth } from '../auth/isAuth'

const Layout = ({children}) => {

  const navigation = useNavigate();

  const { role, id } = useParams();
  console.log('layout', role, id);
  
  const [employee, setEmployee] = useState();
  useEffect(() => {
    if(!isAuth(role, id)) {
      console.log('no auth')
      navigation('/sign-in')
    } else {
      fetchOneEmployee(role, id, setEmployee);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, id])

  const [isSmallScreen] = useMediaQuery("(max-width: 758px)")

  return (
    <Container maxW='full' height={'100%'} bgColor="white" p="0" overflow="hidden" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
      <Header role={role} id={id} />
      <HStack spacing={0} display="flex" width="100%" height="100%" alignItems='flex-start'>
        {isSmallScreen ? <></>:<Sidebar />}
        <div style={{ flex: 1, maxWidth: '100%', height: '100%', position: 'relative', display: 'flex', overflow: 'scroll'}}>
          {children}
        </div>
      </HStack>
    </Container>
  )
}

export default Layout