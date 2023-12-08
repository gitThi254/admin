import axios from "../../api/axios";
const getcolors = async () => {
  const res = await axios.get(`color`).then((res) => {
    return res.data;
  });
  return res.data;
};

const createColor = async (data) => {
  const res = await axios.post(`color`, data).then((res) => {
    return res.data;
  });
  return res.data;
};

const updateColor = async ({ id, data }) => {
  const res = await axios.put(`color/${id}`, data).then((res) => {
    return res.data;
  });
  return res.data;
};

const deleteColor = async (id) => {
  const res = await axios.delete(`color/${id}`).then((res) => {
    return res.data;
  });
  return res.data;
};

const getColor = async (id) => {
  const res = await axios
    .get(`color/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  return res.data;
};

const colorServer = {
  getcolors,
  createColor,
  getColor,
  updateColor,
  deleteColor,
};

export default colorServer;
