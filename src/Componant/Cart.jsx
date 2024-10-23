import React from "react";
import {
  calcluateTotal,
  decreQty,
  increQty,
  removeItem,
} from "../ReduxWork/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Cart = () => {
  const { cartItems, cartTotal } = useSelector((state) => state.cart);
  const dispather = useDispatch();
  dispather(calcluateTotal());
  return (
    <div>
      <h1>cart</h1>
      <h3>Total: {cartTotal}</h3>
      <Row>
        {cartItems.map((client) => {
          return (
            <Col key={client.id} md={3} sm={4} >
              <Card>
                <Card.Img src={`http://localhost:5000/${client.dimg}`} />
                <Card.Body>
                  <Card.Title>{client.dname}</Card.Title>
                  <Card.Text>Price: ${client.dprice}</Card.Text>
                  <button
                    onClick={() => {
                      dispather(increQty({ fid: client.id }));
                    }}
                  >
                    <FaArrowUp />
                  </button>
                  Qty {client.Qty}
                  <button
                    onClick={() => {
                      dispather(decreQty({ fid: client.id }));
                    }}
                  >
                    <FaArrowDown />
                  </button>
                </Card.Body>
                <Card.Footer>
                  <button
                    onClick={() => {
                      dispather(removeItem({ fid: client.id }));
                    }}
                  >
                    Remove
                  </button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
      
    </div>
  );
};

export default Cart;
