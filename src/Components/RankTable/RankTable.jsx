import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  ButtonGroup,
  IconButton,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchAllEmployee } from "../../api/server_routes";
import rank1_avatar from "../../assets/rank1_avatar.png";

const RankTable = ({ role, id, setNumberOfEmployee }) => {
  let [employeeList, setEmployeeList] = useState([]);
  const [page, setPage] = useState(0);
  const [listLimit, setListLimit] = useState([]);

  useEffect(() => {
    fetchAllEmployee(setEmployeeList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    employeeList.sort((a,b) => b.exp - a.exp)
    let arrList = [];
    let z = 0;
    for (let i = 0; i < employeeList.length / 6; i = i + 1) {
      let arr = [];
      for (let j = 0; j < 5; j++) {
        if (z < employeeList.length) {
          employeeList[z].id = z;
          arr.push(employeeList[z]);
          z++;
        }
      }
      arrList.push(arr);
    }
    setListLimit(arrList);
  }, [employeeList])

  useEffect(() => {
    setNumberOfEmployee(employeeList.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeList]);

  const ThStyle = {
    textAlign: "left",
    color: "white",
  };

  const handlePage = (action) => {
    if(action === 'back' && page > 0) {
      setPage(page - 1);
    } else if(action === 'forward' && page < listLimit.length-1) {
      setPage(page + 1);
    }
  }

  return (
    <TableContainer
      // bgColor="red"
      minWidth="800px"
      width="100%"
      maxWidth="1000px"
      padding="0px 24px 200px 24px"
      style={{ overflow: "visible" }}
    >
      <Table
        className="table"
        cellSpacing="0"
        variant="simple"
        width="100%"
        overflow="visible"
      >
        <TableCaption>
          <ButtonGroup display="flex" alignItems="center" gap="12px" width="full" justifyContent="center">
            <IconButton icon={<ArrowBackIcon />} onClick={() => handlePage('back')}/>
              <Text fontSize="18px">Employee Ranks</Text>
            <IconButton icon={<ArrowForwardIcon />} onClick={() => handlePage('forward')}/>
          </ButtonGroup>
        </TableCaption>
        <Thead overflow="visible" borderRadius="12px" width="100%">
          <Tr className="table_head">
            <Th textAlign="right" color="white">
              Ranking
            </Th>
            <Th style={ThStyle}>id</Th>
            <Th style={ThStyle}>Name</Th>
            <Th style={ThStyle}>Department</Th>
            <Th style={ThStyle}>Position</Th>
            <Th style={ThStyle}>Exp</Th>
          </Tr>
        </Thead>
        <Tbody>
          {listLimit[page]?.map((employee, index) => {
            return (
              <Tr height="40px" minHeight={"40px"} key={index}>
                <Td
                  className={employee._id === id ? "highlight" : ""}
                  width="180px"
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    gap="22px"
                  >
                    <Text fontSize="12px">{(index+1)+(page*5)}</Text>
                    <Image src={rank1_avatar} alt="avatar" height="30px" />
                  </Box>
                </Td>
                <Td
                  className={employee._id === id ? "highlight" : ""}
                  textAlign="left"
                >
                  {employee._id.slice(-5)}
                </Td>
                <Td
                  className={employee._id === id ? "highlight" : ""}
                  textAlign="left"
                >
                  {employee.name}
                </Td>
                <Td
                  className={employee._id === id ? "highlight" : ""}
                  textAlign="left"
                >
                  {employee.department}
                </Td>
                <Td
                  className={employee._id === id ? "highlight" : ""}
                  textAlign="left"
                >
                  {employee.position}
                </Td>
                <Td
                  className={employee._id === id ? "highlight" : ""}
                  textAlign="left"
                >
                  {employee.exp} exp
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RankTable;
