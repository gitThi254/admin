import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrand,
  getBrand,
  updateBrand,
} from "../features/brand/brandSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Addbrand = () => {
  const location = useLocation();
  const getBrandId = location.pathname.split("/")[3];
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (getBrandId) {
      dispacth(updateBrand({ id: getBrandId, data }));
    } else {
      dispacth(createBrand(data));
    }
    navigate("/admin/list-brand");
  };
  useEffect(() => {
    if (getBrandId) {
      dispacth(getBrand(getBrandId));
    }
  }, [getBrandId]);
  const getBrandState = useSelector((state) => state.brands.brand);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: getBrandId ? getBrandState.title : "",
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">{getBrandId ? "Edit" : "Add"} Brand</h3>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            type="text"
            label="Enter Add Brand"
            name="title"
            register={register}
          />
          <button className="btn btn-success border-0 rounded-3 my-5">
            {getBrandId ? "Edit" : "Add"} Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbrand;
