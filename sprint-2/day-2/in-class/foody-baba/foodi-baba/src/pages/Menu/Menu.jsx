import { useState, useEffect } from "react";
import axios from "axios";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";
import SingleCard from "./SingleCard";

const Menu = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    return axios.get(`http://127.0.0.1:5000/api/dishes`);
  };

  useEffect(() => {
    getData()
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  return (
    <>
      <Box>
        <Flex flexWrap="wrap" w="90%" m="auto">
          {data.map((e, index) => (
            <Box key={index} width="25%" p={2}>
              <SingleCard
                dish_id={e.dish_id}
                dish_name={e.dish_name}
                price={e.price}
                stock={e.stock}
                availability={e.availability}
                category={e.category}
                description={e.description}
                ingredients={e.ingredients}
                discounts={e.discounts}
                image_url={e.image_url}
                reviews={e.reviews}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Menu;
