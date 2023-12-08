import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Forgotpassword from "./pages/Forgotpassword";
import DashBoard from "./pages/DashBoard";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import Bloglist from "./pages/Bloglist";
import Blogcat from "./pages/Blogcat";
import Orders from "./pages/Orders";
import ProductList from "./pages/Productlist";
import CategoryList from "./pages/Categorylist";
import ColorList from "./pages/Color";
import Customer from "./pages/Cutomer";
import Addblog from "./pages/Addblog";
import Addblogcat from "./pages/Addblogcat";
import AddColor from "./pages/Addcolor";
import Addcat from "./pages/Addcat";
import Addbrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";
import Brandlist from "./pages/Brandlist";
import Couponlist from "./pages/couponlist";
import AddCoupon from "./pages/AddCoupon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="blog-list" element={<Bloglist />} />
            <Route path="blog" element={<Addblog />} />
            <Route path="blog/:id" element={<Addblog />} />

            <Route path="blog-category" element={<Addblogcat />} />
            <Route path="color" element={<AddColor />} />
            <Route path="color/:id" element={<AddColor />} />
            <Route path="category" element={<Addcat />} />
            <Route path="category/:id" element={<Addcat />} />
            <Route path="brand" element={<Addbrand />} />
            <Route path="brand/:id" element={<Addbrand />} />
            <Route path="list-brand" element={<Brandlist />} />
            <Route path="coupon-list" element={<Couponlist />} />
            <Route path="coupon" element={<AddCoupon />} />
            <Route path="coupon/:id" element={<AddCoupon />} />

            <Route path="product" element={<AddProduct />} />
            <Route path="blog-category-list" element={<Blogcat />} />
            <Route path="orders" element={<Orders />} />
            <Route path="list-product" element={<ProductList />} />
            <Route path="list-category" element={<CategoryList />} />
            <Route path="list-color" element={<ColorList />} />
            <Route path="customers" element={<Customer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
