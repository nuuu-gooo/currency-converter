import axios from "axios";

export const publicAxios = axios.create({
  baseURL: "https://api.frankfurter.app/latest",
});
