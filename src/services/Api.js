/* eslint-disable no-undef */
import axios from "axios";

// create a new axios instance
const instance = axios.create({
  baseURL: `` // for the purpose of cors, I used relative path
});

// perform action before a request is sent
instance.interceptors.request.use(config => {
  return config;
});

// perform action after a response is returned 
instance.interceptors.response.use(response => {
  return response;
});

export default () => instance;