import axios from "axios";
const login = "https://edu.yamo.uz"
const landing = "https://web.diziproedu.uz"

export const baseUrl=landing

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;