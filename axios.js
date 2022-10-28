import axios from "axios";
export const baseUrl="http://147.182.187.59:2020"
const instance = axios.create({
  baseURL: baseUrl
});

export default instance;