import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Heading,
  Center,
} from "@chakra-ui/react";
import axios from "axios";

const Dashboard = () => {
  const initialFormData = {
    dish_id: 0,
    dish_name: "",
    price: 0,
    stock: 0,
    availability: true,
    category: "",
    description: "",
    ingredients: [],
    discounts: "",
    image_url: "",
    reviews: [],
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios
      .post("http://127.0.0.1:5000/api/dishes", formData)
      .then((response) => {
        console.log(response.data);
        // Perform further actions if needed
        alert("Product added successfully");
        setFormData(initialFormData); // Reset the form fields
      })
      .catch((error) => {
        console.error(error);
        // Handle error
        alert("An error occurred while adding the product");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Center>
        <Heading p={5}>Dashboard</Heading>
      </Center>
      <Center>
        <Heading as="h4" size="md">
          Add Items to the Menu
        </Heading>
      </Center>
      <Box width="60%" m="auto">
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl>
              <FormLabel>Dish ID</FormLabel>
              <Input
                type="number"
                name="dish_id"
                value={formData.dish_id}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Dish Name</FormLabel>
              <Input
                type="text"
                name="dish_name"
                value={formData.dish_name}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Stock</FormLabel>
              <Input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Availability</FormLabel>
              <Checkbox
                name="availability"
                isChecked={formData.availability}
                onChange={(e) =>
                  handleChange({
                    target: { name: "availability", value: e.target.checked },
                  })
                }
              >
                Available
              </Checkbox>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Ingredients</FormLabel>
              <Input
                type="text"
                name="ingredients"
                value={formData.ingredients.join(", ")}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "ingredients",
                      value: e.target.value.split(", "),
                    },
                  })
                }
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Discounts</FormLabel>
              <Input
                type="text"
                name="discounts"
                value={formData.discounts}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input
                type="text"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box>
            <Button colorScheme="blue" mt={4} type="submit">
              Submit
            </Button>
          </Box>
        </form>{" "}
      </Box>
    </>
  );
};

export default Dashboard;
