import { Box, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { fetchAllEmployee } from '../../api/server_routes';
import rank1_avatar from '../../assets/rank1_avatar.png'

const RankTable = ({ role, id, setNumberOfEmployee }) => {

  let [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    fetchAllEmployee(setEmployeeList, employeeList, 1, 2)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setNumberOfEmployee(employeeList.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeList])

  employeeList.sort((a, b) => a.exp - b.exp);

  const ThStyle = {
    textAlign: 'left',
    color: 'white'
  }

  return (
    <TableContainer
      // bgColor="red"
      minWidth="800px" width="100%" maxWidth="1000px" padding="0px 24px 200px 24px"
      style={{ overflow: 'visible' }}>
      <Table
        className="table"
        cellSpacing="0"
        variant="simple" width="100%" overflow="visible">
        <TableCaption>Employee Ranks</TableCaption>
        <Thead overflow="visible" borderRadius="12px" width="100%">
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
            {employeeList.reverse()?.map((employee,index) => {
              return (
                <Tr height='40px' minHeight={'40px'} key={index}>
                  <Td className={employee._id === id ? 'highlight' : ""} width="180px">
                    <Box display="flex" flexDirection="row" justifyContent={'flex-end'} alignItems={'center'} gap="22px">
                      <Text fontSize="12px">{index+1}</Text>
                      <Image src={rank1_avatar} alt="avatar" height="30px" />
                    </Box>
                  </Td>
                  <Td className={employee._id === id ? 'highlight' : ""} textAlign="left">{employee._id.slice(-5)}</Td>
                  <Td className={employee._id === id ? 'highlight' : ""} textAlign="left">{employee.name}</Td>
                  <Td className={employee._id === id ? 'highlight' : ""} textAlign="left">{employee.department}</Td>
                  <Td className={employee._id === id ? 'highlight' : ""} textAlign="left">{employee.position}</Td>
                  <Td className={employee._id === id ? 'highlight' : ""} textAlign="left">{employee.exp} exp</Td>
                </Tr>   
              )
            })}
        </Tbody>
      </Table>

    </TableContainer>
  )
}

export default RankTable