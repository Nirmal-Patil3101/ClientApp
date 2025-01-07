import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Cancelled = () => {
  const { userData } = useSelector((state) => state.user);
    // const orderData = useLocation().state;
  const [cancelledOrders, setcancelledOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCancelledOrders = async () => {
      try {
        const reqStatus = {
          orderStatus: "Cancel",
          ordercustomerid: userData._id,
          // orderid:orderData._id,
        };
        const result = await axios.post(
          "http://localhost:5000/Getorderbycustomerid",
          reqStatus
        );
        setcancelledOrders(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCancelledOrders();
  }, []);
  return (
    <div>
      <h1>Cancelled</h1>
      <Row>
        {
          cancelledOrders.map((order)=>{
          return(
            <Col key={order._id} md={3} sm={4} ld={12}>
              <Card>
                <CardBody>
                  <Card.Text>Name:{order.ordercustomerid?.cname}</Card.Text>
                  <Card.Text>Mobile No:{order.ordercustomerid?.cmobile}</Card.Text>
                </CardBody>
                  <button onClick={(e)=>{e.preventDefault();
                    navigate("/orderdetails",{state:order});
                  }}>View Details</button>
              </Card>
            </Col>
          )
          })
        }
      </Row>
    </div>
  );
};

export default Cancelled;
