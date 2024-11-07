import React, { useEffect } from "react";
import {
  calculateTotal,
  decreQty,
  increQty,
  removeItem,
} from "../ReduxWork/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import "../CSS/Cart.css";

const Cart = () => {
  const { cartItems, cartTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);
  return (
    <div>
      <h1>cart</h1>
      <h3>Total: {cartTotal}</h3>
      <Row>
        {cartItems.map((client) => {
          return (
            <Col md={3} sm={4} className="col-cart" key={client._id}>
              <Card>
                <Card.Img src={`http://localhost:5000/${client.dimg}`} />
                <Card.Body>
                  <Card.Title>{client.dname}</Card.Title>
                  <Card.Text>Price: ${client.dprice}</Card.Text>
                  <button
                    onClick={() => {
                      dispatch(increQty({ fid: client._id }));
                    }}
                  >
                    <FaArrowUp />
                  </button>
                  Qty {client.Qty}
                  <button
                    onClick={() => {
                      dispatch(decreQty({ fid: client._id }));
                    }}
                  >
                    <FaArrowDown />
                  </button>
                </Card.Body>
                <Card.Footer>
                  <button
                    onClick={() => {
                      dispatch(removeItem({ fid: client._id }));
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
