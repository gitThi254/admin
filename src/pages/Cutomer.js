import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customer/customerSlice";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
];

const Customer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const customerstate = useSelector((state) => state.customers);
  const { customer } = customerstate;
  console.log(customer);

  const data1 = [];
  for (let i = 0; i < customer.length; i++) {
    data1.push({
      key: i + 1,
      name: customer[i].firstname + " " + customer[i].lastname,
      email: customer[i].email,
      mobile: customer[i].mobile,
    });
  }
  return (
    <div>
      <h3 className="title">Customer</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customer;
