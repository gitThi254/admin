import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createCoupon,
  getaCoupon,
  updateCoupon,
} from "../features/coupon/couponSlice";

const AddCoupon = () => {
  const location = useLocation();
  const couponId = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const onSubmit = (data) => {
    if (couponId) {
      dispacth(updateCoupon({ id: couponId, data }));
    } else {
      dispacth(createCoupon(data));
    }

    navigate("/admin/coupon-list");
  };
  const getCouponState = useSelector((state) => state.coupon.acoupon);
  useEffect(() => {
    if (couponId) {
      dispacth(getaCoupon(couponId));
    }
  }, []);
  const changeDateFormat = (date) => {
    const newDate = new Date(date).toLocaleDateString();
    let [day, month, year] = newDate.split("/");
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    return [year, month, day].join("-");
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: couponId ? getCouponState.name : "",
      expiry: couponId ? changeDateFormat(getCouponState.expiry) : "",
      discount: couponId ? getCouponState.discount : "",
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">{couponId ? "Edit" : "Add"} Coupon</h3>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            type="text"
            label="Enter name Coupon"
            name="name"
            register={register}
          />
          <CustomInput type="date" name="expiry" register={register} />
          <CustomInput
            type="number"
            label="Enter a discount"
            name="discount"
            register={register}
          />

          <button className="btn btn-success border-0 rounded-3 my-5">
            {couponId ? "Edit" : "Add"} Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
