import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Icon, createIcon } from "@chakra-ui/react";

const SingleCard = ({
  dish_id,
  dish_name,
  price,
  stock,
  availability,
  category,
  description,
  ingredients,
  discounts,
  image_url,
  reviews,
}) => {
  const availabilityColor = availability ? "green.500" : "red.500";
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        height="550px"
        w={"500px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image_url})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={image_url}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <HStack>
            {" "}
            <Center>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={700}>
                {dish_name}
              </Heading>

              {/* availability */}
              {/* availability */}
              {/* availability */}
              {/* availability */}
              <Box ml={3}>
                <Icon viewBox="0 0 200 200" color={availabilityColor}>
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              </Box>

              {/* availability */}
              {/* availability */}
              {/* availability */}
              {/* availability */}
            </Center>
          </HStack>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            ({category})
          </Text>
          <Text color={"gray.500"} fontSize={"sm"} textAlign="center">
            {description}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"} ml={2} mr={2}>
              ${price}
            </Text>
            <Text
              textDecoration={"line-through"}
              color={"gray.600"}
              ml={2}
              mr={2}
            >
              ${price + 50}
            </Text>
            <Text color={"gray.600"} ml={2} mr={2}>
              Stock : {stock}
            </Text>
          </Stack>
          <Text bg="gray.100" pl={2} pr={2} borderRadius={5}>
            {discounts}
          </Text>

          <HStack gap={12} p={3}>
            <Button>Update</Button>
            <Button>Delete</Button>
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
};

export default SingleCard;
