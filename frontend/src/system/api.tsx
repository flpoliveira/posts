import axios from "axios";

// Axios api declaration
export const api = axios.create({
  baseURL: "http://127.0.0.1:9000/",
  headers: {
    "Content-Type": "application/json",
  },
});
