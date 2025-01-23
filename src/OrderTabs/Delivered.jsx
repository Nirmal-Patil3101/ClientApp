import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Row ,Col} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../CSS/Delivered.css";

const Delivered = () => {
  const {userData} = useSelector((state)=>state.user);
  const [deliveredOrder,stedeliveredOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchDeliveredOders = async()=>{
      try {
        const reqStatus={
          orderStatus:"Delivered",
          ordercustomerid:userData._id,
        };
        const result = await axios.post("http://localhost:5000/Getorderbycustomerid",reqStatus);
        stedeliveredOrder(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDeliveredOders();
  },[])
  return (
  <div className="delivered-container">
    <h1>Delivered</h1>
     <Row>
      {
        deliveredOrder.map((order)=>{
          return(
            <Col key={order._id} md={3} sm={4} ld={12}>
            <Card className="order-card"> 
              <CardBody>
                <Card.Text><strong>Name:</strong> {order.ordercustomerid?.cname}</Card.Text>
                <Card.Text><strong>Mobile No:</strong> {order.ordercustomerid?.cmobile}</Card.Text>
                <Card.Text><strong>Total Amount:</strong> {order.orderTotal}</Card.Text>
                <Card.Text><strong>OrderNoofItem:</strong> {order.orderNoofItem}</Card.Text>
              </CardBody>
              <button onClick={(e)=>{
                e.preventDefault();
                navigate("/orderdetails",{state:order});
              }}>View Details</button>
            </Card>
            </Col>
          )
        })
      }
     </Row>
  </div>
  )
};

export default Delivered;
