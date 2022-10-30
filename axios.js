import axios from "axios";
export const baseUrl="http://137.184.3.22:2020"
const instance = axios.create({
  baseURL: baseUrl
});

export default instance;