import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrand, getBrands } from "../features/brand/brandSlice";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import { displayName } from "react-quill";
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

const Brandlist = () => {
  const [open, setOpen] = useState(false);
  const [brandId, setBrandId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setBrandId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  const brandState = useSelector((state) => state.brands);
  const { brands } = brandState;
  const data1 = [];
  for (let i = 0; i < brands.length; i++) {
    data1.push({
      key: i + 1,
      title: brands[i].title,
      action: (
        <>
          <Link
            to={`/admin/brand/${brands[i]._id}`}
            className="fs-3 text-warning"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(brands[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const delBrand = (e) => {
    setOpen(false);
    dispatch(deleteBrand(e));
    setTimeout(() => {
      dispatch(getBrands());
    }, 100);
  };
  return (
    <div>
      <h3 className="title">brand list</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>

      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => delBrand(brandId)}
        title="Are you sure you want to delete this brand"
      />
    </div>
  );
};

export default Brandlist;
