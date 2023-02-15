import axios from "axios";

const Axios = axios.create({
  baseURL:'https://devapi.qweather.com/v7/weather',
  timeout: 60000, // 请求超时时间
});
// 异常拦截处理器
const errorHandler = (error:any) => {
  return Promise.resolve(error);
};

// 设置请求传递数据的格式
Axios.defaults.headers["Content-Type"] = "application/json";

Axios.interceptors.request.use((config) => {
  config.params.key = 'c4a8a535e17f4f0695eb4cb08b20b173'
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
