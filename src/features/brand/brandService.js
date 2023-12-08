import axios from "../../api/axios";
const getBrands = async () => {
  const res = await axios.get(`brand`).then((res) => {
    return res.data;
  });
  return res.data;
};
const getBrand = async (id) => {
  const res = await axios.get(`brand/${id}`).then((res) => {
    return res.data;
  });
  return res.data;
};
const deleteBrand = async (id) => {
  const res = await axios.delete(`brand/${id}`).then((res) => {
    return res.data;
  });
  return res.data;
};

const createBrands = async (data) => {
  const res = await axios.post(`brand`, data).then((res) => {
    return res.data;
  });
  return res.data;
};

const updateBrand = async ({ id, data }) => {
  const res = await axios.put(`brand/${id}`, data).then((res) => {
    return res.data;
  });
  return res.data;
};

const brandServer = {
  getBrands,
  createBrands,
  updateBrand,
  getBrand,
  deleteBrand,
};

export default brandServer;
