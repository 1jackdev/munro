import { React, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import "./OrderForm.css";
import sendDataToSheet from "../api/api.js";

const OrderForm = ({ roasts }) => {
  const INITIAL_STATE = {
    Name: "",
    Email: "",
  };
  for (let r of roasts) {
    INITIAL_STATE[r.Name] = "0";
  }

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showFormError, setShowFormError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(INITIAL_STATE);

  const increment = (name) => {
    let val = parseInt(formData[name]);
    if (val < 20) {
      setFormData((formData) => ({
        ...formData,
        [name]: val + 1,
      }));
    }
  };

  const decrement = (name) => {
    let val = parseInt(formData[name]);
    if (val > 0) {
      setFormData((formData) => ({
        ...formData,
        [name]: val - 1,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const getTotal = () => {
    let total = 0;
    for (let r of roasts) {
      let val = parseInt(formData[r.Name]);
      total += val;
    }
    return total;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const total = getTotal();

    if (total === 0) {
      setShowFormError(true);
    } else {
      setIsSubmitting(true);
      setShowSuccess(false);
      setShowError(false);

      const resp = await sendDataToSheet(formData);

      if (resp.status === 200) {
        setShowSuccess(true);
        setIsSubmitting(false);
        setFormData(INITIAL_STATE);
      } else {
        setShowError(true);
      }
    }
  };

  const submitButton = () => {
    if (isSubmitting) {
      return (
        <Spinner variant="light" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    } else {
      return <span className="text-white">Submit Order</span>;
    }
  };

  return (
    <div className="container">
      {showSuccess && (
        <Alert
          className="alert-btn"
          variant="success"
          dismissible
          onClose={() => setShowSuccess(false)}
        >
          Hooray! We've received your order. If you have any questions, feel
          free to <a href="/contact">contact us.</a>
        </Alert>
      )}
      {showError && (
        <Alert
          className="alert-btn"
          variant="danger"
          dismissible
          onClose={() => setShowError(false)}
        >
          Uh Oh! Something went wrong with your order. Feel free to try again.
          If you have any questions, feel free to{" "}
          <a href="/contact">contact us.</a>
        </Alert>
      )}

      {showFormError && (
        <Alert
          className="alert-btn"
          variant="warning"
          dismissible
          onClose={() => setShowFormError(false)}
        >
          Looks like you haven't selectd any coffee. Try using the buttons below
          to adjust your desired quantity.
        </Alert>
      )}

      <form
        method="POST"
        className="py-2 col-12 col-md-4"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            type="email"
            name="Email"
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
          <br />
          {roasts.map((r, idx) => (
            <div className="form-inline" key={idx}>
              <div className="form-control d-flex">
                <label className="col-7 col-md-8 pt-1" htmlFor={r.Name}>
                  {r.Name}
                </label>
                <div
                  className="minus col-1 mx-2 mx-md-1"
                  onClick={() => decrement(r.Name)}
                >
                  -
                </div>
                <input
                  className="col-2"
                  name={r.Name}
                  min={0}
                  max={20}
                  type="text"
                  onChange={handleChange}
                  value={formData[r.Name]}
                />
                <div
                  className="plus col-1 mx-2 mx-md-1"
                  onClick={() => increment(r.Name)}
                >
                  +
                </div>
              </div>
            </div>
          ))}
          <button className="btn btn-primary w-75 mt-5 col-6 col-md-8">
            {submitButton()}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
