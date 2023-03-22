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

const RankTable = ({ setWorstPerformer, setTotalMinute, role, id, setNumberOfEmployee }) => {
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
    let haveExpList = [];
    let z = 0;
    let totalMinute = 0;
    let limit = 5;
    for (let i = 0; i < employeeList.length / limit; i = i + 1) {
      let arr = [];
      for (let j = 0; j < limit; j++) {
        if (z < employeeList.length) {
          employeeList[z].id = z;
          arr.push(employeeList[z]);
          totalMinute += employeeList[z]?.hr_of_training;
          if(employeeList[z].exp > 0) {
            haveExpList.push(employeeList[z])
          }
          z++;
        }
      }
      arrList.push(arr);
    }
    setWorstPerformer(haveExpList[haveExpList.length-1])
    setTotalMinute(totalMinute);
    setListLimit(arrList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeList])
  console.log(listLimit)

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
            <IconButton variant="unstyled" icon={<ArrowBackIcon />} onClick={() => handlePage('back')}/>
            {listLimit.map((item, index) => (
              <Text
                width="25px" height="25px" lineHeight="80%" cursor="pointer"
                padding="6px" borderRadius="10000px" fontSize="18px"
                bgColor={page === index ? 'gray.200' : 'transparent'}
                onClick={() => setPage(index)}
              >{index+1}</Text>
            ))}
            <IconButton variant="unstyled" icon={<ArrowForwardIcon />} onClick={() => handlePage('forward')}/>
          </ButtonGroup>
        </TableCaption>
        <Thead overflow="visible" borderRadius="12px" width="100%">
          <Tr className="table_head">
            <Th textAlign="right" color="white">
              Ranking
            </Th>
            {/* <Th style={ThStyle}>id</Th> */}
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
                    {((index+1)+(page*5)) === 1 ? (
                      <svg width="25" height="25" viewBox="0 0 1263 1263" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2577_7787)">
                      <path d="M197.343 39.4688C197.343 29.001 201.501 18.962 208.903 11.5601C216.305 4.1583 226.344 0 236.812 0L1026.19 0C1036.65 0 1046.69 4.1583 1054.1 11.5601C1061.5 18.962 1065.66 29.001 1065.66 39.4688C1065.66 81.9371 1064.71 122.353 1062.97 160.717C1094.16 165.882 1124 177.24 1150.73 194.122C1177.47 211.003 1200.55 233.067 1218.61 259.01C1236.68 284.954 1249.37 314.253 1255.94 345.18C1262.5 376.107 1262.81 408.035 1256.83 439.081C1250.86 470.127 1238.73 499.663 1221.16 525.948C1203.59 552.232 1180.94 574.732 1154.54 592.122C1128.13 609.511 1098.51 621.437 1067.43 627.197C1036.34 632.957 1004.42 632.434 973.535 625.659C911.175 772.877 825.291 844.868 749.905 863.339V1034.87L862.391 1062.97C877.705 1066.76 892.151 1073.63 904.781 1083.1L1049.87 1191.96C1056.49 1196.93 1061.39 1203.86 1063.86 1211.76C1066.33 1219.67 1066.25 1228.15 1063.63 1236.01C1061.01 1243.87 1055.98 1250.71 1049.26 1255.55C1042.54 1260.39 1034.47 1263 1026.19 1263H236.812C228.528 1263 220.454 1260.39 213.734 1255.55C207.014 1250.71 201.988 1243.87 199.368 1236.01C196.749 1228.15 196.668 1219.67 199.138 1211.76C201.608 1203.86 206.503 1196.93 213.13 1191.96L358.217 1083.1C370.847 1073.63 385.293 1066.76 400.607 1062.97L513.093 1034.87V863.339C437.708 844.868 351.824 772.877 289.463 625.58C258.566 632.392 226.617 632.943 195.503 627.201C164.389 621.46 134.741 609.542 108.31 592.151C81.8793 574.76 59.2013 552.249 41.6154 525.947C24.0296 499.645 11.8925 470.086 5.92107 439.016C-0.0503862 407.945 0.264829 375.993 6.8481 345.046C13.4314 314.1 26.1492 284.786 44.2505 258.836C62.3518 232.887 85.4696 210.828 112.238 193.962C139.007 177.095 168.885 165.764 200.106 160.638C198.247 120.275 197.326 79.8744 197.343 39.4688V39.4688ZM205.158 239.97C163.967 247.507 127.457 271.098 103.66 305.553C79.8636 340.009 70.7288 382.506 78.2656 423.697C85.8024 464.888 109.393 501.397 143.849 525.194C178.304 548.991 220.802 558.126 261.993 550.589C235.706 467.705 215.577 365.402 205.158 239.97V239.97ZM1001.08 550.589C1042.28 558.126 1084.77 548.991 1119.23 525.194C1153.68 501.397 1177.27 464.888 1184.81 423.697C1192.35 382.506 1183.21 340.009 1159.42 305.553C1135.62 271.098 1099.11 247.507 1057.92 239.97C1047.42 365.481 1027.29 467.705 1001.08 550.589Z" fill="#FFAA04" fill-opacity="0.65"/>
                      <path d="M552.787 620.52V580.104H625.031V324.977L557.334 376.003L532.579 342.154L637.155 266.879H670.499V580.104H730.618V620.52H552.787Z" fill="black" fill-opacity="0.4"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_2577_7787">
                      <rect width="1263" height="1263" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                    ) : (
                      <>
                      </>
                    )}
                    <Text fontSize="12px">{(index+1)+(page*5)}</Text>
                    <Image src={rank1_avatar} alt="avatar" height="30px" />
                  </Box>
                </Td>
                {/* <Td
                  className={employee._id === id ? "highlight" : ""}
                  textAlign="left"
                >
                  {employee._id.slice(-5)}
                </Td> */}
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
