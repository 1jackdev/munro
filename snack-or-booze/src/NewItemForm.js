import { React, useState, useContext } from "react";
import SnackOrBoozeApi from "./Api";
import FoodContext from "./FoodContext";

const NewItemForm = () => {
  const INITIAL_STATE = {
    type: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };
  // here we bring in the FoodContext values that are
  // shared throughout the whole app.
  const { updatedFoods, setUpdatedFoods } = useContext(FoodContext);

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await SnackOrBoozeApi.addItem(formData);
    setFormData(INITIAL_STATE);
    // when we call the set function below,
    // we will trigger the useEffect in App.js
    setUpdatedFoods(!updatedFoods);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group d-block col-sm-12 font-weight-bold">
        <div className="row justify-content-around mb-2 bg-dark">
          <div className="form-group-check">
            <input
              className="form-check-input"
              id="type1"
              type="radio"
              name="type"
              value="snacks"
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="type1">
              Snack
            </label>
          </div>
          <div className="form-group-check">
            <input
              className="form-check-input"
              id="type2"
              type="radio"
              name="type"
              value="drinks"
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="type2">
              Drink
            </label>
          </div>
        </div>

        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description</label>
        <input
          className="form-control"
          id="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <label htmlFor="recipe">Recipe</label>
        <input
          className="form-control"
          id="recipe"
          type="text"
          name="recipe"
          value={formData.recipe}
          onChange={handleChange}
          required
        />
        <label htmlFor="serve">Serve</label>
        <input
          className="form-control"
          id="serve"
          type="text"
          name="serve"
          value={formData.serve}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary mt-3 col-sm-6 col-md-8">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default NewItemForm;
