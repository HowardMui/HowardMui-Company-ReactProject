import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

export const createPost = (data) => API.post("/post", data);
