import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getEnquiry } from "../features/enquiries/enquirySlice";
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
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Comment",
    dataIndex: "comment",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Requiries = () => {
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getEnquiry());
  }, []);

  const getEnquiriesState = useSelector((state) => state.enquiries);
  const { enquiries } = getEnquiriesState;
  const data1 = [];
  for (let i = 0; i < enquiries.length; i++) {
    data1.push({
      key: i + 1,
      name: enquiries[i].name,
      email: enquiries[i].email,
      mobile: enquiries[i].mobile,
      comment: enquiries[i].comment,
      status: (
        <>
          <select name="" className="form-control form-select" id="">
            <option value="">Set Status</option>
          </select>
        </>
      ),
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
      <h3 className="title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Requiries;
