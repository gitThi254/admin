import axios from "../../api/axios";
const getEnquiry = async () => {
  const res = await axios.get(`enquiry`).then((res) => {
    return res.data;
  });

  return res.data;
};

const enquiryServer = {
  getEnquiry,
};

export default enquiryServer;
