import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const shortenUrl = async (originalUrl) => {
  const res = await API.post("/shorten", { originalUrl });
  return res.data;
};
