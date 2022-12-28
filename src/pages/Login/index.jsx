import React, { useState } from "react";
import "./login.css";
import { loginSuccess } from "../../services/auth";
import { useDispatch } from "react-redux";

const initialState = {
  userName: "",
  password: "",
};
const Login = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {
    dispatch(loginSuccess(values));
    setValues(initialState);
  };
  return (
    <>
      <div className="loginPage">
        <h1>Login</h1>
        <input
          type={"text"}
          value={values.userName}
          name="userName"
          onChange={handleChange}
          placeholder="enter user name"
        />
        <br />
        <br />

        <input
          type={"password"}
          value={values.password}
          name="password"
          onChange={handleChange}
          placeholder="enter password"
        />
        <br />
        <br />
        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
};

export default Login;
