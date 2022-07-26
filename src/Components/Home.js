import React, { useState } from "react";
import { useUserContext } from "../ContextStore";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [form, setForm] = useState({ name: "" });
  const [errors, setErrors] = useState([]);
  const { setName } = useUserContext();
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!(form.name.trim().length > 0)) {
      setErrors([{ msg: "*Name cannot be empty" }]);
      return false;
    }
    return true;
  };

  const onClickSubmit = () => {
    if (validate()) {
      setName(form.name);
      navigate("/dashboard");
    }
  };

  return (
    <div className="home">
      <img
        src={process.env.PUBLIC_URL + "logo.png"}
        className="home-logo"
        alt="logo"
      />
      <h2 className="home-title">Task management</h2>
      <input
        className="home-input"
        type="text"
        placeholder="Enter name"
        name="name"
        value={form.name}
        onChange={onChangeInput}
      />
      {errors.map((error) => (
        <div className="home-error-alert">{error.msg}</div>
      ))}
      <button className="home-btn" onClick={onClickSubmit}>
        Submit
      </button>
    </div>
  );
}
