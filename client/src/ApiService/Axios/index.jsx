import axios from "axios";

const Axios = axios.create({ baseURL: "http://localhost:7000/api" });
export const baseUrl = "http://localhost:7000/api";
export default Axios;

export const server = "http://localhost:7000";
