import axios from 'axios';
import React, { useState } from 'react'
import { Card, CardBody, Col, Container, Form, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Orderdetails = () => {
  const orderData = useLocation().state;
  const [loading, setLoading] = useState(false);

  const cancelorder = async () => {
    let reqorderData = {
      orderid:orderData._id,
      orderStatus:"cancel"
    };
    try {
      setLoading(true);
      const result = await axios.put(
        "http://localhost:5000/updateorder",
        reqorderData
      );
      console.log(result);
      alert("order canceled successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Detiles</h1>
      <h4>Customer Name:{orderData.ordercustomerid?.cname}</h4>
      <h4>Customer Monileno:{orderData.ordercustomerid?.cmobile}</h4>
      <h4>OrderDate:{orderData.orderDate}</h4>
      <h4>OrderTotal:{orderData.orderTotal}</h4>
      <h4>OrderStatus:{orderData.orderStatus}</h4>
      <div>
        <Row>
          {loading.orderItems?.map((Item) => {
            return (
              <Col key={Item._id} md={3} sm={4} ld={12}>
                <Card>
                  <CardBody>
                    <Card.Text>Dish Name: {Item.dishid?.dname}</Card.Text>
                    <Card.Text>Dish Price: {Item.dishid?.dprice}</Card.Text>
                    <Card.Img
                      src={`http://localhost:5000/${Item.dishid.dimg}`}
                    />
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <Container>
        <Form>
          <button onClick={(e)=>{e.preventDefault();
            cancelorder();
          }}>canceloder</button>
        </Form>
      </Container>
    </div>
  )
}

export default Orderdetails
