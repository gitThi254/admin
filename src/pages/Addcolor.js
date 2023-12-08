import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createColor,
  getColor,
  updateColor,
} from "../features/color/colorSlice";
import { updateBrand } from "../features/brand/brandSlice";

const AddColor = () => {
  const location = useLocation();
  const colorId = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const onSubmit = (data) => {
    if (colorId) {
      dispacth(updateColor({ id: colorId, data }));
    } else {
      dispacth(createColor(data));
    }
    navigate("/admin/list-color");
  };
  const getColorState = useSelector((state) => state.colors.color);
  useEffect(() => {
    if (colorId) {
      dispacth(getColor(colorId));
    }
  }, [colorId]);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: colorId ? getColorState.title : "",
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">{colorId ? "Edit" : "Add"} Color</h3>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            type="color"
            label="Enter Add Color"
            name="title"
            register={register}
          />
          <button className="btn btn-success border-0 rounded-3 my-5">
            {colorId ? "Edit" : "Add"} Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddColor;
