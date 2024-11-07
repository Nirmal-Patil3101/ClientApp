import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Form } from "react-bootstrap";
import { registration } from "../ReduxWork/UserSlice";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const regisData = useLocation();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [adders, setadders] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");

  const dispatcher = useDispatch();

  const handleForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reqCustData = Object.fromEntries(formData.entries());
    console.log("DATA", reqCustData);
    try {
      const result = await axios.post(
        "http://localhost:5000/addcustomer",
        reqCustData,{
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      dispatcher(registration(result.data));
      ressetForm();
      alert("Registration Successful");
    } catch (error) {
      console.log(error);
    }
  };

  function ressetForm() {
    setname("");
    setemail("");
    setpassword("");
    setmobileNo("");
    setadders("");
    setcity("");
    setstate("");
    setpincode("");
  }

  return (
    <div>
      <h1>Register</h1>
      <Container>
        <Form
          onSubmit={(e) => {
            //e.preventDefault();
            handleForm(e);
          }}
        >
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            name="cname"
            // value={cname}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="cemail"
            // value={cemail}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <Form.Control
            type="text"
            placeholder="Enter Mobile No"
            name="cmobile"
            // value='cmobile'
            onChange={(e) => {
              setmobileNo(e.target.value);
            }}
          />
          <Form.Group>
            <Form.Check
              type="radio"
              value="Female"
              label="Female"
              name="gender"
            />
            <Form.Check type="radio" value="Male" label="Male" name="gender" />
          </Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter Adders"
            name="cadders"
            // value='cadders'
            onChange={(e) => {
              setadders(e.target.value);
            }}
          />
          <Form.Control
            type="text"
            placeholder="Enter City"
            name="ccity"
            // value='ccity'
            onChange={(e) => {
              setcity(e.target.value);
            }}
          />
          <Form.Control
            type="text"
            placeholder="Enter state"
            name="cstate"
            // value='cstate'
            onChange={(e) => {
              setstate(e.target.value);
            }}
          />
          <Form.Control
            type="text"
            placeholder="Enter pincode"
            name="cpincode"
            // value='cpincode'
            onChange={(e) => {
              setpincode(e.target.value);
            }}
          />
          <Form.Control type="file" name="image" />
          <button type="submit" className="submit-btn">
            Registration
          </button>
          <p
            onClick={() => {
              navigate("/login");
            }}
          >
            Already have an account ? Login
          </p>
        </Form>
      </Container>
    </div>
  );
};

export default Registration;
