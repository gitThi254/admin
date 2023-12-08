import axios from "../../api/axios";
const login = async (userData) => {
  const res = await axios.post(`users/login-admin`, userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const authServer = {
  login,
};

export default authServer;
