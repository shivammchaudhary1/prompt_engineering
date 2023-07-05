import React, { useState } from "react";
import axios from "axios";
import "./AddDishComponent.css";

const AddDishComponent = () => {
  const [dish, setDish] = useState({
    dish_id: "",
    dish_name: "",
    price: "",
    availability: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDish((prevDish) => ({ ...prevDish, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setDish((prevDish) => ({ ...prevDish, availability: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/dishes", dish);
      alert("Dish added successfully!");
      setDish({
        dish_id: "",
        dish_name: "",
        price: "",
        availability: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-dish-container">
      <h2>Add New Dish</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Dish ID:
          <input
            type="text"
            name="dish_id"
            value={dish.dish_id}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Dish Name:
          <input
            type="text"
            name="dish_name"
            value={dish.dish_name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={dish.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Availability:
          <input
            type="checkbox"
            name="availability"
            checked={dish.availability}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <button type="submit">Add Dish</button>
      </form>
    </div>
  );
};

export default AddDishComponent;
