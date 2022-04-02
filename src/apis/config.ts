import axios from "axios";

import { API_URL } from "@/common/config";

// Creating axios instance with base configuration
const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
