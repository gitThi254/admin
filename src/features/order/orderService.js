import axios from "../../api/axios";
const getOrders = async () => {
  const res = await axios.get(`users/get-all-orders`).then((res) => {
    return res.data;
  });
  return res.data;
};

const orderServer = {
  getOrders,
};

export default orderServer;
