import axios from "../../api/axios";
const getCoupon = async () => {
  const res = await axios.get(`coupon`).then((res) => {
    return res.data;
  });
  return res.data;
};

const createCoupon = async (data) => {
  const res = await axios.post(`coupon`, data).then((res) => {
    return res.data;
  });
  return res.data;
};
const getaCoupon = async (id) => {
  const res = await axios.get(`coupon/${id}`).then((res) => {
    return res.data;
  });
  return res.data;
};
const updateCoupon = async ({ id, data }) => {
  const res = await axios.put(`coupon/${id}`, data).then((res) => {
    return res.data;
  });
  return res.data;
};
const deleteCoupon = async (id) => {
  const res = await axios.delete(`coupon/${id}`).then((res) => {
    return res.data;
  });
  return res.data;
};

const couponServer = {
  getCoupon,
  createCoupon,
  getaCoupon,
  updateCoupon,
  deleteCoupon,
};

export default couponServer;
