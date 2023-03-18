import { Box, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { fetchAllEmployee } from '../../api/server_routes';
import rank1_avatar from '../../assets/rank1_avatar.png'

const RankTable = ({ setNumberOfEmployee}) => {

  const [employeeList, setEmployeeList ] = useState([]);
  
  useEffect(() => {
    fetchAllEmployee(setEmployeeList, employeeList)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setNumberOfEmployee(employeeList.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeList])

  console.log(employeeList)

  const ThStyle = {
    textAlign: 'left',
    color: 'white'
  }

  return (
    <TableContainer
      // bgColor="red"
      minWidth="800px" width="100%" maxWidth="1000px" padding="0px 24px 200px 24px"
      style={{ overflow: 'visible'}}>
      <Table
      className="table"
      cellSpacing="0"
      variant="simple" width="100%" overflow="visible">
        <TableCaption>Employee Ranks</TableCaption>
        <Thead oveflow="visible" borderRadius="12px" width="100%">
          <Tr className="table_head">
            <Th textAlign="right" color="white">Ranking</Th>
            <Th style={ThStyle}>id</Th>
            <Th style={ThStyle}>Name</Th>
            <Th style={ThStyle}>Department</Th>
            <Th style={ThStyle}>Position</Th>
            <Th style={ThStyle}>Exp</Th>
          </Tr>
        </Thead>
        <Tbody>
          <>
                      {/* <Tr height='40px' minHeight={'40px'}>
              <Td >
                <Box display="flex" flexDirection="row" justifyContent={'center'} alignItems={'center'} gap="22px">
                  <Text>1</Text>
                  <Image src={rank1_avatar} alt="avatar" height="30px" />
                </Box>
              </Td>
              <Td textAlign="left">Geo</Td>
              <Td textAlign="left">Marketing</Td>
              <Td textAlign="left">General</Td>
              <Td textAlign="left">120 exp</Td>
            </Tr> */}
          </>
            {employeeList?.map((employee,index) => {
              return (
                <Tr height='40px' minHeight={'40px'} key={index}>
                  <Td width="180px">
                    <Box display="flex" flexDirection="row" justifyContent={'flex-end'} alignItems={'center'} gap="22px">
                      <Text fontSize="12px">{employee?.rank === 0 || employee?.rank === null ? 'un-ranked' : employee.rank}</Text>
                      <Image src={rank1_avatar} alt="avatar" height="30px" />
                    </Box>
                  </Td>
                  <Td textAlign="left">{employee._id.slice(-5)}</Td>
                  <Td textAlign="left">{employee.name}</Td>
                  <Td textAlign="left">{employee.department}</Td>
                  <Td textAlign="left">{employee.position}</Td>
                  <Td textAlign="left">{employee.exp} exp</Td>
                </Tr>   
              )
            })}
        </Tbody>
      </Table>

    </TableContainer>
  )
}

export default RankTable