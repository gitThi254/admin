import React, { useEffect, useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import ReactQuill from "react-quill";
import CustomInput from "../components/CustomInput";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { getCategories } from "../features/category/categorySlice";
import { getColors } from "../features/color/colorSlice";
import "react-widgets/styles.css";
import { Multiselect } from "react-widgets";
import Dropzone from "react-dropzone";
import { getUpload, delUpload } from "../features/upload/uploadSlice";
import { createProduct } from "../features/product/productSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const AddProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, control, reset, setValue } = useForm({
    defaultValues: {
      brand: "",
      category: "",
      title: "",
      description: "",
      price: "",
      color: [],
      quanity: "",
      images: [],
    },
  });
  const onSumit = (data) => {
    dispacth(createProduct(data));
    navigate("/admin/list-product");
    reset();
  };
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getColors());
    dispacth(getBrands());
    dispacth(getCategories());
  }, []);
  const getColorState = useSelector((state) => state.colors);
  const getBrandState = useSelector((state) => state.brands);
  const getCategoryState = useSelector((state) => state.categories);
  const getImageState = useSelector((state) => state.images);
  const { images } = getImageState;
  const { brands } = getBrandState;
  const { categories } = getCategoryState;
  const { colors } = getColorState;
  const newProduct = useSelector((state) => state.products);
  const { isSuccess, isError, isLoading, createProducted } = newProduct;
  useEffect(() => {
    if (createProducted) {
      toast.success("Product Added Successfully");
    } else if (isError) {
      toast.error("Product Add Successffully");
    }
  }, [isSuccess, isError, isLoading, createProducted]);

  const colors_otion = [];
  useEffect(() => {
    setValue("images", images);
  }, [images]);

  colors.forEach((i) => {
    colors_otion.push({
      id: i._id,
      color: i.title,
    });
  });

  return (
    <div>
      <Stepper activeStep={1}>
        <Step label="Add Blog Details" />
        <Step label="Upload Images" />
        <Step label="Finish" />
      </Stepper>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form action="" onSubmit={handleSubmit(onSumit)}>
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="title"
            register={register}
          />
          <div className="my-3">
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => <ReactQuill {...field} theme="snow" />}
            ></Controller>
          </div>
          <CustomInput
            type="text"
            label="Enter Product Price"
            name="price"
            register={register}
          />
          <select
            name=""
            className="form-control py-3 mb-3"
            id=""
            {...register("brand")}
            defaultValue={""}
          >
            <option value="">select brand</option>
            {brands &&
              brands.map((brand) => (
                <option value={brand._id} key={brand._id}>
                  {brand.title}
                </option>
              ))}
          </select>
          <select
            name=""
            className="form-control py-3 mb-3"
            id=""
            {...register("category")}
            defaultValue={""}
          >
            <option value="">select category</option>
            {categories &&
              categories.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.title}
                </option>
              ))}
          </select>
          <div className="my-3">
            <Controller
              name="color"
              control={control}
              render={({ field }) => (
                <Multiselect
                  {...field}
                  dataKey="id"
                  textField="color"
                  data={colors_otion}
                />
              )}
            />
          </div>

          <CustomInput
            type="text"
            label="Enter Product Quantity"
            name="quantity"
            register={register}
          />
          <div className="bg-white border-1 p-5 text-center">
            <Dropzone
              onDrop={(acceptedFiles) => dispacth(getUpload(acceptedFiles))}
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
                  onClick={() => dispacth(delUpload(i.public_id))}
                ></button>
                <img src={i.url} width={200} height={200} alt="" />
              </div>
            ))}
          </div>
          <button className="btn btn-success border-0 rounded-3 my-5">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
