import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Col, Row } from "react-bootstrap";
import "../CSS/Dish.css";
import { useDispatch } from "react-redux";
import { addItem } from "../ReduxWork/CartSlice";
import { useNavigate } from "react-router-dom";

const Dish = () => {
  // const { data } = useSelector((state) => state.user);
  const [clientdishes, setclientdishes] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        {clientdishes.map((dish, index) => {
          return (
            <Col key={dish.id || index} md={3} sm={4} className="dish">
              <Card className="card-dish">
                <Card.Img src={`http://localhost:5000/${dish.dimg}`} />
                <CardBody>
                  <Card.Text>Name:{dish.dname}</Card.Text>
                  <Card.Text>Rs.{dish.dprice}</Card.Text>
                </CardBody>
                <CardFooter>
                  <button
                    onClick={() => {
                      dispatch(addItem(dish));
                      // alert('Added')
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      navigate("/dishdetails", { state: dish });
                    }}
                  >
                    Dish Details
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
