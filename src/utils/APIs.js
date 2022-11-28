import axios from "axios";
import { API_URL } from "./config";

export const getCategoryAPI = async () =>
  await axios({ url: `${API_URL}api/category/` })
    .then((res) => res.data)
    .catch((e) => console.log("error: ", e));

export const getBannerAPI = async () =>
  await axios({ url: `${API_URL}api/banner/` })
    .then((res) => res.data)
    .catch((e) => console.log("error: ", e));

export const getContactsAPI = async () =>
  await axios({ url: `${API_URL}api/contact/` })
    .then((res) => res.data)
    .catch((e) => console.log("error: ", e));
