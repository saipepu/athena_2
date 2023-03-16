import { Container, HStack } from '@chakra-ui/react'
import React from 'react'
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar'
import { useMediaQuery } from '@chakra-ui/react'

const Dashboard = ({children}) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 758px)")
  return (
    <Container maxW='full' height={'100%'} bgColor="white" p="0" overflow="hidden" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
      <Header />
      <HStack spacing={0} display="flex" width="100%" height="100%" alignItems='flex-start'>
        {isSmallScreen ? <></>:<Sidebar />}
        <div style={{ flex: 1, maxWidth: '100%', height: '100%', position: 'relative', display: 'flex', overflow: 'scroll'}}>
          {children}
        </div>
      </HStack>
    </Container>
  )
}

export default Dashboard