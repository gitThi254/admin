import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productState = useSelector((state) => state.products);

  const { products } = productState;
  const data1 = [];
  for (let i = 0; i < products.length; i++) {
    data1.push({
      key: i + 1,
      title: products[i].title,
      brand: products[i].brand,
      category: products[i].category,
      color: products[i].color.map((color) => color.color).join(", "),
      price: products[i].price,
      action: (
        <>
          <Link to="/" className="fs-3 text-warning">
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
      <h3 className="title">Product list</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ProductList;
