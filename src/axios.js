import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/app-237a1/us-central1/api" //API (cloud function) URL
});

export default instance;
