import React, { useEffect } from "react";
import {
  calculateTotal,
  decreQty,
  increQty,
  clearCart,
  removeItem,
} from "../ReduxWork/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import "../CSS/Cart.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, cartTotal } = useSelector((state) => state.cart);
  const { userData } = useSelector((state) => state.user);
  
  let navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(calculateTotal());

  let placeOrder = async () => {
    let finalItems = [];
    cartItems.forEach((item) => {
      finalItems.push({
        dishid: item._id,
        Qty: item.Qty,
      });
    });

    let orderReqData = {
      orderTotal: cartTotal,
      orderNoofItem: cartItems.length,
      ordercustomerid: userData._id,
      orderItems: finalItems,
    };
    try {
      let result = await axios.post("http://localhost:5000/addorder", orderReqData);
      dispatch(clearCart());
      console.log(result.data);
      alert("Order Placed");
      navigate("/dish");
    } catch (error) {
      console.log(error);
    }
  };
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
      <button
        onClick={() => {
          placeOrder();
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Cart;
