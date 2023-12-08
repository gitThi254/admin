import axios from "../../api/axios";

const uploadImg = async (data) => {
  const res = await axios.post("upload/", data);
  return res.data;
};

const deleteImg = async (id) => {
  const res = await axios.delete(`upload/delete-img/${id}`);
  return res.data;
};

const uploadService = {
  uploadImg,
  deleteImg,
};

export default uploadService;
