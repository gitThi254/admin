import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { Stepper, Step } from "react-form-stepper";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";
import { useForm, Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/category/categorySlice";
import { delUpload, getUpload } from "../features/upload/uploadSlice";
import Dropzone from "react-dropzone";
import { createBCategory } from "../features/bcategory/bcategorySlice";
import { createBlog, getBlog, resetState } from "../features/blog/blogSlice";

const Addblog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const blogId = location.pathname.split("/")[3];

  useEffect(() => {
    dispatch(resetState());

    dispatch(getCategories());
  }, []);
  const onSubmit = (data) => {
    dispatch(createBlog(data));
    navigate("/admin/blog-list");
  };
  const getCategoryState = useSelector((state) => state.categories);
  const getImageState = useSelector((state) => state.images);
  const getBlogState = useSelector((state) => state.blogs.blog);
  useEffect(() => {
    if (blogId !== undefined) {
      dispatch(getBlog(blogId));
    } else {
      dispatch(resetState());
    }
  }, [blogId, getBlogState]);
  const { register, handleSubmit, control, reset, setValue, getValues } =
    useForm({
      defaultValues: {
        title: blogId ? getBlogState.title : "",
        description: blogId ? getBlogState.description : "",
        category: blogId ? getBlogState.category : "",
        images: blogId ? getBlogState.images : [],
      },
    });
  const { categories } = getCategoryState;
  const { images } = getImageState;
  useEffect(() => {
    setValue("images", images);
  }, [images]);

  return (
    <div>
      <Stepper activeStep={1}>
        <Step label="Add Blog Details" />
        <Step label="Upload Images" />
        <Step label="Finish" />
      </Stepper>
      <h3 className="mb-4 title">Add blog</h3>
      <div className="">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            type="text"
            label="Enter Blog Title"
            className="mt-3"
            name="title"
            register={register}
          />
          <select
            name=""
            id=""
            className="form-control py-3 mb-3"
            {...register("category")}
          >
            <option value="" className="form-control py-3 mb-3">
              Select Blog Category
            </option>
            {categories.map((category) => (
              <option key={category._id} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
          <div className="my-3">
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => <ReactQuill {...field} theme="snow" />}
            ></Controller>
          </div>
          <div className="bg-white border-1 p-5 text-center">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(getUpload(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex my-4 flex-wrap gap-3">
            {images.map((i, j) => (
              <div key={j} className="position-relative">
                <button
                  className="btn-close position-absolute"
                  style={{ top: "5px", right: "5px" }}
                  onClick={() => dispatch(delUpload(i.public_id))}
                ></button>
                <img src={i.url} width={200} height={200} alt="" />
              </div>
            ))}
          </div>
          <button className="btn btn-success border-0 rounded-3 my-5">
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
