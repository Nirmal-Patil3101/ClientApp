import axios from "axios";
import React, { useState } from "react";
import { Card, CardBody, Col, Container, Row ,Image, Modal} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


const Dishdetails = () => {
  const DishData = useLocation().state;
  const {userdata} = useSelector((state)=>state.user)
  const [review, setreview] = useState([]);
  // console.log(DishData);
  const handleClose = () =>setShow(false);
  const handleShow = () => setShow(true);
  
  const AddReview = async () => {
    let reqdishdata = {
      Rating: Rating,
      Comment: Comment,
      dishid: DishData._id,
      customerid:userdata._id
    };
    try {
      setreview(true);
      const result = await axios.post(
        "http://localhost:5000/addreview",
        reqdishdata
      );
      handleClose();
      console.log(result);
      alert("Review add");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container className="my-5">
      <h1 className="mb-4">Dish Details</h1>
      <Row className="align-items-center">
          <Col md={6}>
          <Image src={`http://localhost:5000/${DishData.dimg}`}/>
          </Col>
          <Col md={6}>
          <h3 className="mb-3">Dish Name:{DishData.dname}</h3>
          <h4 className="mb-2">Dish Price:{DishData.dprice}</h4>
          <h5 className="mb-2">Dish Type:{DishData.dtype}</h5>
          <h6>Dish Category:{DishData.dcategory}</h6>
          <button >Add Review</button>
          </Col> 
          <Modal>
           
          </Modal>
         </Row>
      </Container>
    </div>
  );
};

export default Dishdetails;
