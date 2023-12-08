import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/order/orderSlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Orders = () => {
  const dipatch = useDispatch();
  useEffect(() => {
    dipatch(getOrders());
  }, []);

  const getOrderState = useSelector((state) => state.orders);
  const { orders } = getOrderState;
  console.log(orders);
  const data1 = [];
  for (let i = 0; i < orders.length; i++) {
    data1.push({
      key: i + 1,
      name: orders[i].orderby.firstname,
      product: orders[i].products.map((i, j) => {
        return (
          <ul key={j}>
            <li>{i.product.title}</li>
          </ul>
        );
      }),
      amount: orders[i].paymentIntent.amount,
      date: new Date(orders[i].createdAt).toLocaleString(),
      action: (
        <>
          <Link to="/" className="fs-3 text-warning">
            <BiEdit />
          </Link>
          <Link to="/" className="ms-3  fs-3 text-danger">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="title">Orders</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Orders;
