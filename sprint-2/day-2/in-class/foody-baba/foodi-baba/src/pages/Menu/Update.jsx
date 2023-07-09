// // import {
// //   Modal,
// //   ModalOverlay,
// //   ModalContent,
// //   ModalHeader,
// //   ModalFooter,
// //   ModalBody,
// //   ModalCloseButton,
// //   Button,
// //   FormControl,
// //   FormLabel,
// //   Input,
// //   Checkbox,
// //   Center,
// //   Heading,
// //   Box,
// // } from "@chakra-ui/react";
// // import React, { useState } from "react";

// // const Update = ({ dish_id }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const initialRef = React.useRef();
// //   const finalRef = React.useRef();
// //   const [formData, setFormData] = useState({
// //     dish_id: "",
// //     dish_name: "",
// //     price: "",
// //     stock: "",
// //     availability: false,
// //     category: "",
// //     description: "",
// //     ingredients: [],
// //     discounts: "",
// //     image_url: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevFormData) => ({
// //       ...prevFormData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission here
// //     console.log(formData);
// //     setIsOpen(false);
// //   };

// //   const handleOpen = () => {
// //     setIsOpen(true);
// //   };

// //   const handleClose = () => {
// //     setIsOpen(false);
// //   };

// //   return (
// //     <>
// //       <Button onClick={handleOpen}>Update</Button>
// //       <Modal
// //         initialFocusRef={initialRef}
// //         finalFocusRef={finalRef}
// //         isOpen={isOpen}
// //         onClose={handleClose}
// //       >
// //         <ModalOverlay />
// //         <ModalContent>
// //           <ModalHeader>Add Item to the Menu</ModalHeader>
// //           <ModalCloseButton />
// //           <ModalBody pb={6}>
// //             <Box>
// //               <FormControl>
// //                 <FormLabel>Dish ID</FormLabel>
// //                 <Input
// //                   type="number"
// //                   name="dish_id"
// //                   value={formData.dish_id}
// //                   onChange={handleChange}
// //                   ref={initialRef}
// //                 />
// //               </FormControl>
// //             </Box>
// //             <Box>
// //               <FormControl>
// //                 <FormLabel>Dish Name</FormLabel>
// //                 <Input
// //                   type="text"
// //                   name="dish_name"
// //                   value={formData.dish_name}
// //                   onChange={handleChange}
// //                 />
// //               </FormControl>
// //             </Box>
// //             <Box>
// //               <FormControl>
// //                 <FormLabel>Price</FormLabel>
// //                 <Input
// //                   type="number"
// //                   name="price"
// //                   value={formData.price}
// //                   onChange={handleChange}
// //                 />
// //               </FormControl>
// //             </Box>
// //             <Box>
// //               <FormControl>
// //                 <FormLabel>Stock</FormLabel>
// //                 <Input
// //                   type="number"
// //                   name="stock"
// //                   value={formData.stock}
// //                   onChange={handleChange}
// //                 />
// //               </FormControl>
// //             </Box>
// //             <Box>
// //               <FormControl>
// //                 <FormLabel>Availability</FormLabel>
// //                 <Checkbox
// //                   name="availability"
// //                   isChecked={formData.availability}
// //                   onChange={(e) =>
// //                     handleChange({
// //                       target: {
// //                         name: "availability",
// //                         value: e.target.checked,
// //                       },
// //                     })
// //                   }
// //                 >
// //                   Available
// //                 </Checkbox>
// //               </FormControl>
// //             </Box>
// //             <Box>
// //               <FormControl>
// //                 <FormLabel>Category</FormLabel>
// //                 <Input
// //                   type="text"
// //                   name="category"
// //                   value={formData.category}
// //                   onChange={handleChange}
// //                 />
// //               </FormControl>
// //             </Box>
// //             <Box>
// //               <FormControl>
// //                 <FormLabel>Description</FormLabel>
// //                 <Input
// //                   type="text"
// //                   name="description"
// //                   value={formData.description}
// //                   onChange={handleChange}
// //                 />
// //               </FormControl>
// //             </Box>
// //             <Box>
// //               <FormControl>
// //                 <FormLabel>Ingredients</FormLabel>
// //                 <Input
// //                   type="text"
// //                   name="ingredients"
// //                   value={formData.ingredients.join(", ")}
// //                   onChange={(e) =>
// //                     handleChange({
// //                       target: {
// //                         name: "ingredients",
// //                         value: e.target.value.split(", "),
// //                       },
// //                     })
// //                   }
// //                 />
// //               </FormControl>
// //             </Box>
// //             <Box>
// //               <FormControl>
// //                 <FormLabel>Discounts</FormLabel>
// //                 <Input
// //                   type="text"
// //                   name="discounts"
// //                   value={formData.discounts}
// //                   onChange={handleChange}
// //                 />
// //               </FormControl>
// //             </Box>
// //             <Box>
// //               <FormControl>
// //                 <FormLabel>Image URL</FormLabel>
// //                 <Input
// //                   type="text"
// //                   name="image_url"
// //                   value={formData.image_url}
// //                   onChange={handleChange}
// //                 />
// //               </FormControl>
// //             </Box>
// //           </ModalBody>

// //           <ModalFooter>
// //             <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
// //               Submit
// //             </Button>
// //             <Button onClick={handleClose}>Cancel</Button>
// //           </ModalFooter>
// //         </ModalContent>
// //       </Modal>
// //     </>
// //   );
// // };

// // export default Update;

// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Center,
//   Heading,
//   Box,
// } from "@chakra-ui/react";
// import React, { useState, useEffect } from "react";

// const UpdateModal = ({ dish_id }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const initialRef = React.useRef();
//   const finalRef = React.useRef();
//   const [formData, setFormData] = useState({
//     dish_id: "",
//     dish_name: "",
//     price: "",
//     stock: "",
//     availability: false,
//     category: "",
//     description: "",
//     ingredients: [],
//     discounts: "",
//     image_url: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log(formData);
//     setIsOpen(false);
//   };

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       // Fetch the product details from the API using the dish_id
//       fetch(`http://localhost:5000/api/dishes/${dish_id}`)
//         .then((response) => response.json())
//         .then((data) => {
//           // Update the form data with the fetched data
//           setFormData((prevFormData) => ({
//             ...prevFormData,
//             ...data,
//           }));
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }, [isOpen, dish_id]);

//   return (
//     <>
//       <Button onClick={handleOpen}>Open Modal</Button>
//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={handleClose}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Update Item</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <Box>
//               <FormControl>
//                 <FormLabel>Dish ID</FormLabel>
//                 <Input
//                   type="number"
//                   name="dish_id"
//                   value={formData.dish_id}
//                   onChange={handleChange}
//                   ref={initialRef}
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl>
//                 <FormLabel>Dish Name</FormLabel>
//                 <Input
//                   type="text"
//                   name="dish_name"
//                   value={formData.dish_name}
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl>
//                 <FormLabel>Price</FormLabel>
//                 <Input
//                   type="number"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl>
//                 <FormLabel>Stock</FormLabel>
//                 <Input
//                   type="number"
//                   name="stock"
//                   value={formData.stock}
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl>
//                 <FormLabel>Availability</FormLabel>
//                 <Checkbox
//                   name="availability"
//                   isChecked={formData.availability}
//                   onChange={(e) =>
//                     handleChange({
//                       target: {
//                         name: "availability",
//                         value: e.target.checked,
//                       },
//                     })
//                   }
//                 >
//                   Available
//                 </Checkbox>
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl>
//                 <FormLabel>Category</FormLabel>
//                 <Input
//                   type="text"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl>
//                 <FormLabel>Description</FormLabel>
//                 <Input
//                   type="text"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl>
//                 <FormLabel>Ingredients</FormLabel>
//                 <Input
//                   type="text"
//                   name="ingredients"
//                   value={formData.ingredients.join(", ")}
//                   onChange={(e) =>
//                     handleChange({
//                       target: {
//                         name: "ingredients",
//                         value: e.target.value.split(", "),
//                       },
//                     })
//                   }
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl>
//                 <FormLabel>Discounts</FormLabel>
//                 <Input
//                   type="text"
//                   name="discounts"
//                   value={formData.discounts}
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//             <Box>
//               <FormControl>
//                 <FormLabel>Image URL</FormLabel>
//                 <Input
//                   type="text"
//                   name="image_url"
//                   value={formData.image_url}
//                   onChange={handleChange}
//                 />
//               </FormControl>
//             </Box>
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
//               Update
//             </Button>
//             <Button onClick={handleClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default UpdateModal;

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Center,
  Heading,
  Box,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const UpdateModal = ({ dish_id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const [formData, setFormData] = useState({
    dish_id: "",
    dish_name: "",
    price: "",
    stock: "",
    availability: false,
    category: "",
    description: "",
    ingredients: [],
    discounts: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    fetch(`http://localhost:5000/api/dishes/${formData.dish_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Update successful", data);
        setIsOpen(false);
      })
      .catch((error) => {
        console.log("Update failed", error);
      });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      // Fetch the product details from the API using the dish_id
      fetch(`http://localhost:5000/api/dishes/${dish_id}`)
        .then((response) => response.json())
        .then((data) => {
          // Update the form data with the fetched data
          setFormData((prevFormData) => ({
            ...prevFormData,
            ...data,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isOpen, dish_id]);

  return (
    <>
      <Button onClick={handleOpen}>Update</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box>
              <FormControl>
                <FormLabel>Dish ID</FormLabel>
                <Input
                  type="number"
                  name="dish_id"
                  value={formData.dish_id}
                  onChange={handleChange}
                  ref={initialRef}
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
                      target: {
                        name: "availability",
                        value: e.target.checked,
                      },
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Update
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateModal;
