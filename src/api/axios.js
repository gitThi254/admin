import axios from "axios";
import { base_url } from "../utils/base_url";

const instance = axios.create({
  baseURL: base_url,
  withCredentials: true,
});

export default instance;
