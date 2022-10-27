import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);

apiService.interceptors.response.use(
  (request) => {
    console.log("Response", request);
    return request;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
  }
);
export default apiService;
