import React from "react";
import "./Form.css";

const Input = ({ label, error, ...props }) => {
  return (
    <div className="form-group">
      <input className={`input ${error ? "error" : ""}`} placeholder=" " {...props} />
      <label className="label">{label}</label>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default Input;