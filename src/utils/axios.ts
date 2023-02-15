import axios from "axios";

const Axios = axios.create({
  timeout: 60000, // 请求超时时间
});
// 异常拦截处理器
const errorHandler = (error:any) => {
  return Promise.resolve(error);
};

// 设置请求传递数据的格式
Axios.defaults.headers["Content-Type"] = "application/json";

Axios.interceptors.request.use((config) => {
  return config;
}, errorHandler);

Axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  function (error) {
    return Promise.resolve(error);
  }
);
export default Axios;
