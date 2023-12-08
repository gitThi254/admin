import axios from "../../api/axios";
const getBcategories = async () => {
  const res = await axios.get(`blogcategories`).then((res) => {
    return res.data;
  });
  return res.data;
};

const createBcategory = async (data) => {
  const res = await axios.post(`blogcategories`, data).then((res) => {
    return res.data;
  });

  return res.data;
};
const bCategoriesServer = {
  getBcategories,
  createBcategory,
};

export default bCategoriesServer;
