import Axios from "../Axios";

export const registerUserService = async (data) =>
  await Axios.post("/auth/register", data);
export const loginService = async (data) =>
  await Axios.post("/auth/login", data);
export const getUser = async (id) => await Axios.get(`/auth/users/${id}`);
export const updateUser = async (id, data) =>
  await Axios.put(`/auth/update/${id}`, data);
//  forget
export const sendOtpService = async (data) =>
  await Axios.post("/auth/users/forget", data);
export const verifyOtpService = async (data) =>
  await Axios.post("/auth/users/verify", data);
export const setPasswordService = async (data) =>
  await Axios.post("/auth/users/update/password", data);
export const makePayment = async (data) =>
  await Axios.post("/sessions/gig/session/", data);
