import { useState } from "react";
import "./MyComponent.css";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">onChange</h1>
      <p className="description">
        The onChange event handler is commonly used with form elements like
        input, textarea, select, and radio buttons. It executes a function each
        time the value of the input changes, allowing dynamic response and
        interaction with user input.
      </p>
      <div className="input-container">
        <label className="input-label">Name:</label>
        <input
          className="input-field"
          value={name}
          onChange={handleNameChange}
        />
        <span className="input-value">Your name is: {name}</span>
      </div>
      <div className="input-container">
        <label className="input-label">Quantity:</label>
        <input
          className="input-field"
          value={quantity}
          onChange={handleQuantityChange}
          type="number"
        />
        <span className="input-value">Total quantity: {quantity}</span>
      </div>
      <div className="input-container">
        <label className="input-label">Comment:</label>
        <textarea
          className="input-field"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter delivery instruction..."
        />
        <span className="input-value">Your comment: {comment}</span>
      </div>
      <div className="input-container">
        <label className="input-label">Payment:</label>
        <select
          className="select-field"
          value={payment}
          onChange={handlePaymentChange}
        >
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="Discover">Discover</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <span className="input-value">Selected payment method: {payment}</span>
      </div>
      <div className="input-container">
        <label className="radio-label">Shipping:</label>
        <label className="radio-option">
          <input
            type="radio"
            value="Pick Up"
            onChange={handleShippingChange}
            checked={shipping === "Pick Up"}
          />
          Pick Up
        </label>
        <label className="radio-option">
          <input
            type="radio"
            value="Delivery"
            onChange={handleShippingChange}
            checked={shipping === "Delivery"}
          />
          Delivery
        </label>
        <br />
        <span className="input-value">
          Selected delivery method: {shipping}
        </span>
      </div>
    </div>
  );
}

export default MyComponent;
