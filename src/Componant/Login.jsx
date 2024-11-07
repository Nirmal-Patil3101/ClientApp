import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../ReduxWork/UserSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const LoginData = useLocation();
  // const logoutData = useLocation();
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const { userData } = useSelector((state) => state.user);

  return (
    <div>
      <h1>Login</h1>

      <Container>
        <Form onSubmit={(e)=>e.preventDefault()}>
          <Form.Control type='email' placeholder='Enter Email' name='email' onChange={(e)=>setName(e.target.value)} /><br/>
          <Form.Control type='password' placeholder='Enter Password' name='password' onChange={(e)=> setpassword(e.target.value)}/>
        </Form><br/>
        <button
          onClick={() => {
            if (userData.name == name && userData.password == password) {
              dispatcher(login(userData));
              navigate("/");
            } else {
              alert("Incorrect credential");
            }
          }}
        >
          Login
        </button>
        <p
          onClick={() => {
            navigate("/registration");
          }}
        >
          don't have an account? Registration
        </p>
      </Container>
    </div>
  )
}

export default Login
