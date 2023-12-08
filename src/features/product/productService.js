import axios from "../../api/axios";
const getProducts = async () => {
  const res = await axios.get(`products`).then((res) => {
    return res.data;
  });
  return res.data;
};

const createProduct = async (data) => {
  const res = await axios
    .post(`products`, data)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return res.data;
};

const productServer = {
  getProducts,
  createProduct,
};

export default productServer;
