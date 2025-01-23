import React from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../ReduxWork/UserSlice";
import axios from "axios";
import "../CSS/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const doLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reqlogData = Object.fromEntries(formData.entries());
    console.log("Data", reqlogData);
    try {
      const result = await axios.post(
        "http://localhost:5000/dologin",
        reqlogData
      );
      dispatch(login(result.data.data));
      alert("Login Successful");
      navigate("/dish");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Container>
        <Form onSubmit={doLogin}>
          <Form.Control type="email" placeholder="Enter Email" name="cemail" />
          <br />
          <Form.Control type="password" placeholder="Enter Password"  name="cpassword"/>
          <br />
          <button type="submit">Login</button>
        </Form>
        <p
          onClick={() => {
            navigate("/registration");
          }}
        >
          Don't have an account? Register
        </p>
      </Container>
    </div>
  );
};

export default Login;
