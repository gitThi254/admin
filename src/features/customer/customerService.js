import axios from "../../api/axios";
const getUsers = async () => {
  const res = await axios.get(`users/all-users`).then((res) => {
    return res.data;
  });

  return res.data;
};

const customerServer = {
  getUsers,
};

export default customerServer;
