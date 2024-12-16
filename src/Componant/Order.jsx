import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [orders, setorders] = useState([]);
  useEffect(() => {
    async function fetcorder() {
      const result = await axios.get("http://localhost:5000/allorder");
      setorders(result.data);
    }
    fetcorder();
  }, []);
  const navvigate = useNavigate();
  return (
    <div>
      <Row>
        {orders.map((order) => {
          return (
            <Col md={3} sm={4} ld={12} key={order._id}>
              <Card>
                <CardBody>
                  <Card.Text>OrderTotal:{order.orderTotal}</Card.Text>
                  <Card.Text>orderStatus:{order.orderStatus}</Card.Text>
                  <Card.Text>OrderDate:{order.orderDate}</Card.Text>
                  <Card.Text>
                    Customer Name:{order.ordercustomerid?.cname}
                  </Card.Text>
                  <Card.Text>
                    Customer Mobile No:{order.ordercustomerid?.cmobile}
                  </Card.Text>
                </CardBody>
                <button
                  onClick={() => {
                    navvigate("/orderdetails", { state: order });
                  }}
                >
                  Details
                </button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Order;
