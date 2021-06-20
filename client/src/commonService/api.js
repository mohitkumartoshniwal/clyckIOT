import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseCredentials.js";

const getToken = async () => {
  const token = await firebase.auth().currentUser.getIdToken();
  return token;
};

const axiosCreate = async () => {
  const token = await getToken();
  return axios.create({
    baseURL: `${firebaseConfig.BASE_URL}/api`,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const getService = async (endpoint) => {
  const api = await axiosCreate();
  return await api.get(endpoint);
};

export const postService = async (endpoint, body) => {
  const api = await axiosCreate();
  return await api.post(endpoint, body);
};

export const putService = async (endpoint, body) => {
  const api = await axiosCreate();
  return await api.put(endpoint, body);
};
