import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Pending = () => {
  const { userData } = useSelector((state) => state.user);
  const [PendingOrders, setPendingOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPendingOrders = async () => {
      try {
        const reqStatus = {
          orderStatus: "Pending",
          ordercustomerid: userData._id,
        };
        const result = await axios.post(
          "http://localhost:5000/Getorderbycustomerid",
          reqStatus
        );
        setPendingOrders(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPendingOrders();
  }, []);
  return (
    <div>
      <h1>Pending</h1>
      <Row>
        {
          PendingOrders.map((order)=>{
            return(
              <Col key={order._id} md={3} sm={4} ld={12}>
              <Card>
                <CardBody>
                  <Card.Text>Name:{order.ordercustomerid?.cname}</Card.Text>
                  <Card.Text>Mobile No:{order.ordercustomerid?.cmobile}</Card.Text>
                </CardBody>
                <Card.Footer>
                  <button onClick={(e)=>{
                    e.preventDefault();
                    navigate("/orderdetails");
                  }}>View Details</button>
                </Card.Footer>
              </Card>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default Pending
