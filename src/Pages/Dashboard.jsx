import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import red_clock from "../assets/red_clock.png";
import token from "../assets/token.png";
import exp_img from "../assets/exp_img.png";
import avatar from '../assets/rank1_avatar.png'
import employee_img from '../assets/employee_img.png'
import RankTable from "../Components/RankTable/RankTable";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import { fetchOneEmployee } from "../api/server_routes";

const Dashboard = () => {
  const { role, id } = useParams();
  const [worstPerformer, setWorstPerformer] = useState();
  const [numberOfEmployee, setNumberOfEmployee] = useState([]);
  const [employee, setEmployee] = useState();
  const [totalMinute, setTotalMinute] = useState();

  useEffect(() => {
    fetchOneEmployee(role, id, setEmployee);
    console.log("dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, id]);

  const EmployeeDashboard = () => {
    return (
      <HStack
        minWidth="800px"
        width="100%"
        maxWidth="1000px"
        height="160px"
        spacing={"24px"}
        padding="24px"
      >
        <Card
          height="100%"
          bgColor="white"
          flex="1"
          minWidth="260px"
          direction={"row"}
          alignItems="center"
          justifyContent="flex-start"
          padding="12px 24px"
          borderRadius="8px"
          boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.15)"
          border="0.5px solid #00000010"
        >
          <Image height="65px" src={red_clock} objectFit="contain" alt="red_clock" />
          <CardBody padding="12px">
            <Heading
              fontSize={"16px"}
              fontWeight="normal"
              color="#A3AED0"
              whiteSpace="none !important"
            >
              Minutes of Training
            </Heading>
            <Text as="p" fontSize={"36px"} lineHeight="100%" whiteSpace="none">
              {employee?.hr_of_training}
            </Text>
          </CardBody>
        </Card>
        <Card
          height="100%"
          bgColor="white"
          flex="1"
          minWidth="260px"
          direction={"row"}
          alignItems="center"
          justifyContent="flex-start"
          padding="12px 24px"
          borderRadius="8px"
          boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.15)"
          border="0.5px solid #00000010"
        >
          <Image height="65px" src={token} objectFit="contain" alt="red_clock" />
          <CardBody padding="12px">
            <Heading
              fontSize={"16px"}
              fontWeight="normal"
              color="#A3AED0"
              whiteSpace="none"
            >
              Tokens
            </Heading>
            <Text as="p" fontSize={"36px"} lineHeight="100%" whiteSpace="none">
              {employee?.ATH}
            </Text>
          </CardBody>
        </Card>
        <Card
          height="100%"
          bgColor="white"
          flex="1"
          minWidth="260px"
          direction={"row"}
          alignItems="center"
          justifyContent="flex-start"
          padding="12px 24px"
          borderRadius="8px"
          boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.15)"
          border="0.5px solid #00000010"
        >
          <Image height="65px" src={exp_img} objectFit="contain" alt="red_clock" />
          <CardBody padding="12px">
            <Heading
              fontSize={"16px"}
              fontWeight="normal"
              color="#A3AED0"
              whiteSpace="none"
            >
              xp
            </Heading>
            <Text as="p" fontSize={"36px"} lineHeight="100%" whiteSpace="none">
              {employee?.exp}
            </Text>
          </CardBody>
        </Card>
      </HStack>
    );
  };

  const AdminDashboard = () => {
    return (
      <HStack
        minWidth="800px"
        width="100%"
        maxWidth="1000px"
        height="160px"
        spacing={"24px"}
        padding="24px"
      >
        <Card
          height="100%"
          bgColor="white"
          flex="1"
          minWidth="260px"
          direction={"row"}
          alignItems="center"
          justifyContent="flex-start"
          padding="12px 24px"
          borderRadius="8px"
          boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.15)"
          border="0.5px solid #00000010"
        >
          <Image height="65px" src={employee_img} objectFit="contain" alt="red_clock" />
          <CardBody padding="12px">
            <Heading
              fontSize={"16px"}
              fontWeight="normal"
              color="#A3AED0"
              whiteSpace="none"
            >
              Employees
            </Heading>
            <Text as="p" fontSize={"36px"} lineHeight="100%" whiteSpace="none">
              {numberOfEmployee}
            </Text>
          </CardBody>
        </Card>
        <Card
          height="100%"
          bgColor="white"
          flex="1"
          minWidth="260px"
          direction={"row"}
          alignItems="center"
          justifyContent="flex-start"
          padding="12px 24px"
          borderRadius="8px"
          boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.15)"
          border="0.5px solid #00000010"
        >
          <Image height="100%" src={red_clock} objectFit="contain" alt="red_clock" />
          <CardBody padding="12px">
            <Heading
              fontSize={"16px"}
              fontWeight="normal"
              color="#A3AED0"
              whiteSpace="nowrap"
            >
              Employees Training Time
            </Heading>
            <Text as="p" fontSize={"36px"} lineHeight="100%" whiteSpace="none">
              {totalMinute} mins
            </Text>
          </CardBody>
        </Card>
        <Card
          height="100%"
          bgColor="white"
          flex="1"
          minWidth="260px"
          direction={"row"}
          alignItems="center"
          justifyContent="flex-start"
          padding="12px 24px"
          borderRadius="8px"
          boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.15)"
          border="0.5px solid #00000010"
        >
          <Image height="65px" src={avatar} objectFit="contain" alt="red_clock" />
          <CardBody padding="12px">
            <Heading
              fontSize={"16px"}
              fontWeight="normal"
              color="#A3AED0"
              whiteSpace="none"
            >
              Worst Performer
            </Heading>
            <Text as="p" fontSize={"36px"} lineHeight="100%" whiteSpace="none">
              {worstPerformer?.name}
            </Text>
          </CardBody>
        </Card>
      </HStack>
    );
  };

  return (
    <Layout>
      <VStack
        // bgColor="blue"
        className="scroll_container"
        style={{ color: "black" }}
        height="100%"
        width={"100%"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        overflow="scroll"
      >
        {role === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
        <RankTable
          setWorstPerformer={setWorstPerformer}
          setTotalMinute={setTotalMinute}
          id={id}
          role={role}
          setNumberOfEmployee={setNumberOfEmployee}
        />
      </VStack>
    </Layout>
  );
};

export default Dashboard;
