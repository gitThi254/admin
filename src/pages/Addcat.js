import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  getCategory,
  updateCategory,
} from "../features/category/categorySlice";

const Addcat = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const location = useLocation();
  const categoryId = location.pathname.split("/")[3];

  const getCategoryState = useSelector((state) => state.categories.category);
  useEffect(() => {
    if (categoryId) {
      dispacth(getCategory(categoryId));
    }
  }, [categoryId]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: categoryId ? getCategoryState.title : "",
    },
  });

  const onSubmit = (data) => {
    if (categoryId) {
      dispacth(updateCategory({ id: categoryId, data }));
    } else {
      dispacth(createCategory(data));
    }
    navigate("/admin/list-category");
  };

  return (
    <div>
      <h3 className="mb-4 title">{categoryId ? "Edit" : "Add"} category</h3>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            type="text"
            label="Enter Add Category"
            name="title"
            register={register}
          />
          <button className="btn btn-success border-0 rounded-3 my-5">
            {categoryId ? "Edit" : "Add"} category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcat;
