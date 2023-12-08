import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blog/blogSlice";
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
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Views",
    dataIndex: "views",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Bloglist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const getBlogsState = useSelector((state) => state.blogs);
  const { blogs } = getBlogsState;
  const data1 = [];
  for (let i = 0; i < blogs.length; i++) {
    data1.push({
      key: i + 1,
      title: blogs[i].title,
      description: blogs[i].description,
      category: blogs[i].category,
      views: blogs[i].numViews,
      action: (
        <>
          <Link
            to={`/admin/blog/${blogs[i]._id}`}
            className="fs-3 text-warning"
          >
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
      <h3 className="title">blog list</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Bloglist;
