import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
const Login = () => {
  const navigate = useNavigate();
  let schema = Yup.object().shape({
    email: Yup.string()
      .email("Email Should be valid")
      .required("User is required"),
    password: Yup.string().required("password is required"),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(login(data));
  };

  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (!user == null || isSuccess) {
      navigate("admin");
    } else {
      alert("not ");
    }
  }, [user, isLoading, isSuccess, message]);

  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">login</h3>
        <p className="text-center">Login to your accout to continue.</p>
        <form action="" onSubmit={handleSubmit(onSubmit)} method="post">
          <div>
            <CustomInput
              type="text"
              label="Email Address"
              i_id="Email"
              name="email"
              register={register}
              error={errors}
            />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div>
            <CustomInput
              type="password"
              label="Password"
              i_id="pass"
              name="password"
              register={register}
            />
            <p className="error">{errors.password?.message}</p>
          </div>

          <div className="mb-3 text-end">
            <Link to="forgot-password" className="float-right">
              Forgot Password?
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
