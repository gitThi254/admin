import axios from "../../api/axios";
const getBlogs = async () => {
  const res = await axios.get(`blogs`).then((res) => {
    return res.data;
  });
  return res.data;
};

const createBlog = async (data) => {
  const res = await axios.post(`blogs`, data).then((res) => {
    return res.data;
  });
  return res.data;
};

const deleteBlog = async (id) => {
  const res = await axios.delete(`blogs/${id}`).then((res) => {
    return res.data;
  });
  return res.data;
};

const getBlog = async (id) => {
  const res = await axios.get(`blogs/${id}`).then((res) => {
    return res.data;
  });
  return res.data;
};

const updateBlog = async ({ id, data }) => {
  const res = await axios.put(`blogs/${id}`, data).then((res) => {
    return res.data;
  });
  return res.data;
};

const blogServer = {
  getBlogs,
  createBlog,
  updateBlog,
  getBlog,
  deleteBlog,
};

export default blogServer;
