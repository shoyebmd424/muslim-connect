import axios from "../Axios";

export const postRequest = (path, data) => {
  return axios.post(`${path}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getRequest = (path) => {
  return axios.get(`${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
