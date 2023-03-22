import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "./Layout";
import avatar from "../assets/avatar_boy.png";
import brown_sweater from "../assets/brown_sweater.png";
import black_suit from "../assets/black_suit.png";
import green_hoodie from "../assets/green_hoodie.png";
import pink_dress from "../assets/pink_dress.png";
import white_sneaker from "../assets/white_sneaker.png";
import blue_tshirt from "../assets/blue_tshirt.png";
import star from "../assets/star.png";
import hat from "../assets/hat.png";
import avatar_with_hat from "../assets/avatar_with_hat.png";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const Avatar = () => {
  const [currentTab, setCurrentTab] = useState("clothing");
  const [itemPageNo, setItemPageNo] = useState(0);
  const [selectedItem, setSelectedItem] = useState({});

  const button_selector = {
    position: "absolute",
    left: currentTab === "clothing" ? "0%" : "50%",
    width: "50%",
    height: "100%",
    backgroundColor: "var(--theme-color)",
    borderRadius: "100px",
    transition: "all 0.3s ease-in-out",
  };

  const itemLists = [
    {
      name: "Brown Sweater",
      price: "0.3 ATH",
      image: brown_sweater,
    },
    {
      name: "Hat",
      price: "3 ATH",
      image: hat,
    },
    {
      name: "Green Hoodie",
      price: "1 ATH",
      image: green_hoodie,
    },
    {
      name: "White Sneaker",
      price: "2 ATH",
      image: white_sneaker,
    },
    {
      name: "Pink Dress",
      price: "1 ATH",
      image: pink_dress,
    },
    {
      name: "Blue T-Shirt",
      price: "1 ATH",
      image: blue_tshirt,
    },
    {
      name: "Black Suit",
      price: "10 ATH",
      image: black_suit,
    },
  ];

  const itemPages = [];
  let z = 0;
  for (let i = 0; i < itemLists.length / 6; i = i + 1) {
    let arr = [];
    for (let j = 0; j < 6; j++) {
      if (z < itemLists.length) {
        itemLists[z].id = z;
        arr.push(itemLists[z]);
        z++;
      }
    }
    itemPages.push(arr);
  }

  const handlePagination = (action) => {
    if (action === "back") {
      if (itemPageNo - 1 >= 0) {
        setItemPageNo(itemPageNo - 1);
      }
    }
    if (action === "forward") {
      if (itemPageNo + 1 < itemPages.length) {
        setItemPageNo(itemPageNo + 1);
      }
    }
  };

  return (
    <Layout>
      <HStack
        width="100%"
        height="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="scroll"
      >
        <Box
          flex="1"
          display="grid"
          height="100%"
          minWidth="300px"
          position="relative"
        >
          {selectedItem?.name === "Hat" ? (
            <>
              <Image
                src={hat}
                alt="hat"
                style={{
                  zIndex: 10,
                  objectFit: "contain",
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  top: "7%",
                  left: "51.5%",
                  transform: "translateX(-50%)",
                }}
              />
              <Image
                margin="auto"
                src={avatar}
                alt="avatar"
                width="100%"
                height="500px"
                objectFit="contain"
              />
            </>
          ) : (
            <Image
              margin="auto"
              src={avatar}
              alt="avatar"
              width="100%"
              height="500px"
              objectFit="contain"
            />
          )}
        </Box>
        <Box flex="2" height="100%">
          <VStack
            padding="0px 52px 0px 52px"
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            overflow="scroll"
          >
            <Box
              marginBottom="24px"
              width="100%"
              minHeight="65px"
              position="relative"
              border="1px solid black"
              borderRadius="100px"
              display="flex"
              overflow="hidden"
            >
              <div className="button_selector" style={button_selector}></div>
              <Button
                height="100%"
                variant="unstyled"
                onClick={() => setCurrentTab("clothing")}
                flex="1"
                bgColor="transparent"
                fontSize="20px"
                color={currentTab === "clothing" ? "white" : "black"}
              >
                Clothing
              </Button>
              <Button
                height="100%"
                variant="unstyled"
                onClick={() => setCurrentTab("accessories")}
                flex="1"
                bgColor="transparent"
                fontSize="20px"
                color={currentTab === "accessories" ? "white" : "black"}
              >
                Accessories
              </Button>
            </Box>
            <Box width="100%">
              <Text fontSize="20px" textAlign={"left"}>
                Select an item to try on your avatar
              </Text>
            </Box>
            <Grid
              width="100%"
              height="auto"
              gap="20px"
              templateColumns="repeat(3, 1fr)"
              templateRows="repeat(2, 1fr)"
            >
              {itemPages[itemPageNo]?.map((item, index) => {
                return (
                  <GridItem
                    key={index}
                    cursor={"pointer"}
                    minWidth="200px"
                    borderRadius="20px"
                    padding="12px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                    gap="12px"
                    position="relative"
                    onClick={() => {
                      if (selectedItem?.id !== item.id) {
                        setSelectedItem(item);
                      } else {
                        setSelectedItem({});
                      }
                    }}
                    style={{ borderStyle: "inset" }}
                    bgColor={
                      selectedItem?.id === item.id ? "green.100" : "#F0F0F0"
                    }
                    border={
                      selectedItem?.id === item.id ? "2px solid green" : "none"
                    }
                  >
                    <Image
                      pointerEvents={"none"}
                      src={star}
                      alt="star"
                      width="35px"
                      height="35px"
                      objectFit="contain"
                      position="absolute"
                      right="4%"
                      top="0%"
                    />
                    <Image
                      pointerEvents={"none"}
                      src={item.image}
                      alt={item.image}
                      width="120px"
                      height="120px"
                      objectFit="contain"
                    />
                    <Text fontSize="20px" fontWeight="light">
                      {item.price}
                    </Text>
                  </GridItem>
                );
              })}
            </Grid>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              gap="100px"
            >
              <IconButton
                onClick={() => handlePagination("back")}
                bgColor="transparent"
                icon={<ArrowBackIcon />}
              />
              <IconButton
                onClick={() => handlePagination("forward")}
                bgColor="transparent"
                icon={<ArrowForwardIcon />}
              />
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Layout>
  );
};

export default Avatar;
