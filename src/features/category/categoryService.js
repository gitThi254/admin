import axios from "../../api/axios";
const getCategories = async () => {
  const res = await axios.get(`categories`).then((res) => {
    return res.data;
  });
  return res.data;
};

const createCategory = async (data) => {
  const res = await axios.post(`categories`, data).then((res) => {
    return res.data;
  });
  return res.data;
};

const updateCategory = async ({ id, data }) => {
  const res = await axios.put(`categories/${id}`, data).then((res) => {
    return res.data;
  });
  return res.data;
};

const deleteCategory = async (id) => {
  const res = await axios.delete(`categories/${id}`).then((res) => {
    return res.data;
  });
  return res.data;
};

const getCategory = async (id) => {
  const res = await axios.get(`categories/${id}`).then((res) => {
    return res.data;
  });
  return res.data;
};
const categoryServer = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
};

export default categoryServer;
