import { React, useState } from "react";
import { Alert } from "react-bootstrap";
import "./OrderForm.css";
import sendDataToSheet from "../api/api.js";

const OrderForm = ({ roasts }) => {
  const INITIAL_STATE = {
    Name: "",
    Email: "",
  };
  for (let r of roasts) {
    INITIAL_STATE[r.Name] = 0;
  }

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

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
    setShowSuccess(false);
    setShowError(false);
    const resp = await sendDataToSheet(formData);
    if (resp.status === 200) {
      setShowSuccess(true);
      setFormData(INITIAL_STATE);
    } else {
      setShowError(true);
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

      <form method="POST" className="col-10 col-md-4" onSubmit={handleSubmit}>
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
              <div className="form-control">
                <label className="col-10" htmlFor={r.Name}>
                  {r.Name}
                </label>
                <input
                  className="col-2"
                  name={r.Name}
                  type="number"
                  min={0}
                  max={20}
                  onChange={handleChange}
                  value={formData[r.Name]}
                />
              </div>
            </div>
          ))}
          <button className="btn btn-primary mt-5 col-6 col-md-8">
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
