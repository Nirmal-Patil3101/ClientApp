import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const InTransit = () => {
  const { userData } = useSelector((state) => state.user);
    // const orderData = useLocation().state;
  const [InTransitOrders, setInTransitOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInTransitOrders = async () => {
      try {
        const reqStatus = {
          orderStatus: "Intransit",
          ordercustomerid: userData._id,
          // orderid:orderData._id,
        };
        const result = await axios.post(
          "http://localhost:5000/Getorderbycustomerid",
          reqStatus
        );
        setInTransitOrders(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInTransitOrders();
  }, []);
  return (
    <div>
      <h1>In-Transit</h1>
      <Row>
        {
          InTransitOrders.map((order)=>{
            return(
              <Col key={order._id} md={3} sm={4} ld={12}>
              <Card>
                <CardBody>
                  <Card.Text>Name:{order.ordercustomerid?.cname}</Card.Text>
                  <Card.Text>Mobile No:{order.ordercustomerid?.cmobile}</Card.Text>
                </CardBody>
                <Card.Footer>
                  <button onClick={(e)=>{e.preventDefault();
                    navigate("/orderdetails",{ state: order});
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

export default InTransit
