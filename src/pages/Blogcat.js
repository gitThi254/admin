import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  bCategories,
  getBCategories,
} from "../features/bcategory/bcategorySlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    staus: `London, Park Lane no. ${i}`,
  });
}

const Blogcat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBCategories());
  }, []);
  const getBCategoriesState = useSelector((state) => state.bCategories);
  const { bCategories } = getBCategoriesState;
  const data1 = [];
  for (let i = 0; i < bCategories.length; i++) {
    data1.push({
      key: i,
      title: bCategories[i].title,
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
      <h3 className="title">Blog category</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Blogcat;
