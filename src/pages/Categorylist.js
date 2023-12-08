import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  getCategories,
} from "../features/category/categorySlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import CustomModal from "../components/CustomModal";
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

const CategoryList = () => {
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState("");
  const [open, setOpen] = useState(false);

  const showModal = (e) => {
    setOpen(true);
    setCategoryId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const getCageoriesState = useSelector((state) => state.categories);
  const { categories } = getCageoriesState;

  const data1 = [];
  for (let i = 0; i < categories.length; i++) {
    data1.push({
      key: i,
      title: categories[i].title,
      action: (
        <>
          <Link
            to={`/admin/category/${categories[i]._id}`}
            className="fs-3 text-warning"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(categories[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const delCategory = (e) => {
    setOpen(false);
    dispatch(deleteCategory(e));
    setTimeout(() => {
      dispatch(getCategories());
    }, 100);
  };
  return (
    <div>
      <h3 className="title">Category list</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => delCategory(categoryId)}
        title="Are you sure you want to delete this category"
      />
    </div>
  );
};

export default CategoryList;
