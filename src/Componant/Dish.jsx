import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Col, Row } from "react-bootstrap";
import "../CSS/Dish.css";
import { useDispatch } from "react-redux";
import { addItem } from "../ReduxWork/CartSlice";

const Dish = () => {
  const [clientdishes, setclientdishes] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchClien() {
      const result = await axios.get("http://localhost:5000/getdish");
      setclientdishes(result.data);
    }
    fetchClien();
  }, []);
  return (
    <div>
      <Row>
        {clientdishes.map((client, index) => {
          return (
            <Col key={client.id || index} md={3} sm={4} className="dish">
              <Card className="card-dish">
                <Card.Img src={`http://localhost:5000/${client.dimg}`} />
                <CardBody>
                  <Card.Text>Name:{client.dname}</Card.Text>
                  <Card.Text>Rs.{client.dprice}</Card.Text>
                </CardBody>
                <CardFooter>
                  <button
                    onClick={() => {
                      dispatch(addItem(client));
                      // alert('Added')
                    }}
                  >
                    Add to Cart
                  </button>
                </CardFooter>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Dish;
