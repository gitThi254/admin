import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon, getCoupon } from "../features/coupon/couponSlice";
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
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Expiry",
    dataIndex: "expiry",
  },
  {
    title: "Discount",
    dataIndex: "discount",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Couponlist = () => {
  const [open, setOpen] = useState(false);
  const [couponId, setCouponId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setCouponId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoupon());
  }, []);
  const getCouponState = useSelector((state) => state.coupon);
  const { coupon } = getCouponState;
  const data1 = [];
  for (let i = 0; i < coupon.length; i++) {
    data1.push({
      key: i + 1,
      name: coupon[i].name,
      expiry: new Date(coupon[i].expiry).toLocaleString(),
      discount: coupon[i].discount,
      action: (
        <>
          <Link
            to={`/admin/coupon/${coupon[i]._id}`}
            className="fs-3 text-warning"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(coupon[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const delCoupon = (e) => {
    setOpen(false);
    dispatch(deleteCoupon(e));
    setTimeout(() => {
      dispatch(getCoupon());
    }, 100);
  };
  return (
    <div>
      <h3 className="title">coupon list</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => delCoupon(couponId)}
        title="Are you sure you want to delete this brand"
      />
    </div>
  );
};

export default Couponlist;
