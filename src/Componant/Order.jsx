import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row, Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cancelled from "../OrderTabs/Cancelled";
import InTransit from "../OrderTabs/InTransit";
import Delivered from "../OrderTabs/Delivered";
import Pending from "../OrderTabs/Pending";

const Order = () => {
  const { userData } = useSelector((state) => state.user);

  const [orders, setorders] = useState([]);

  useEffect(() => {
    async function fetcorder() {
      let reqStatus = {
        orderStatus: "Cancel",
        ordercustomerid: userData._id,
      };
      const result = await axios.post(
        "http://localhost:5000/Getorderbystatus",
        reqStatus
      );
      setorders(result.data);
    }
    fetcorder();
  }, []);
  const navvigate = useNavigate();
  return (
    <div>
       <div>
        <Tabs
          defaultActiveKey="Delivered"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Delivered" title="Delivered">
            <Delivered />
          </Tab>
          <Tab eventKey="Pending" title="Pending">
            <Pending />
          </Tab>
          <Tab eventKey="InTransit" title="InTransit">
            <InTransit />
          </Tab>

          <Tab eventKey="Cancelled" title="Cancelled">
            <Cancelled />
          </Tab>
        </Tabs>
      </div>







      {/* <Row>
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
      </Row> */}
    </div>
  );
};

export default Order;
