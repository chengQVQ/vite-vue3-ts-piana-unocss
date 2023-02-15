import axios from "@/utils/axios";

export function nowWeather(data: object) {
  return axios({
    url: "/now",
    params: data,
  });
}

export function sevenWeather(data: object) {
  return axios({
    url: "/7d",
    params: data,
  });
}
