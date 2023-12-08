import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customersReducer from "../features/customer/customerSlice";
import productsReducer from "../features/product/productSlice";
import brandsReducer from "../features/brand/brandSlice";
import categoriesReducer from "../features/category/categorySlice";
import colorsReducer from "../features/color/colorSlice";
import couponReducer from "../features/coupon/couponSlice";
import blogReducer from "../features/blog/blogSlice";
import bCategoriesReducer from "../features/bcategory/bcategorySlice";
import enquiresReducer from "../features/enquiries/enquirySlice";
import ordersReducer from "../features/order/orderSlice";
import uploadReducer from "../features/upload/uploadSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customersReducer,
    products: productsReducer,
    brands: brandsReducer,
    categories: categoriesReducer,
    colors: colorsReducer,
    coupon: couponReducer,
    blogs: blogReducer,
    bCategories: bCategoriesReducer,
    enquiries: enquiresReducer,
    orders: ordersReducer,
    images: uploadReducer,
  },
});
