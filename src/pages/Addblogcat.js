import React from "react";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBCategory } from "../features/bcategory/bcategorySlice";

const Addblogcat = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const onSubmit = (data) => {
    dispacth(createBCategory(data));
    navigate("/admin/blog-category-list");
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Blog Category</h3>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            type="text"
            label="Enter Log Category"
            name="title"
            register={register}
          />
          <button className="btn btn-success border-0 rounded-3 my-5">
            Add Blog Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblogcat;
