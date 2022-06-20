import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/users" });

export const getDataUsersAPI = (payload) => {
  // const { accessToken, data } = payload;
  //   * CONTOH PENGGUNAAN HEADERS
  //   API.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  //   API.defaults.headers.common["Accept"] = "*/*";
  //   API.defaults.headers.common["Content-Type"] = "multipart/form-data";
  //   API.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  return API.get(`/`);
};
export const postDataUserAPI = (payload) => {
  const { accessToken, data } = payload;

  return API.post(`/`, data);
};

export const getDetailUserAPI = (payload) => {
  const { accessToken, data } = payload;
  console.log("DATA", data);
  return API.get(`/${data}`);
};

export const deleteDataUserAPI = (payload) => {
  const { accessToken, data } = payload;
  // let form = new FormData();
  return API.delete(`/${data}`);
};

export const updateDataUserAPI = (payload) => {
  const { accessToken, data } = payload;

  return API.patch(`/${data.id}`, data);
};
