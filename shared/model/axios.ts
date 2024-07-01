import { ErrorCode } from "@/types/error";
import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api",
});

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          throw new Error(ErrorCode.UNAUTHORIZED);
        case 403:
          throw new Error(ErrorCode.FORBIDDEN);
        case 500:
          alert("서버 에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
          break;
      }
    }
  },
);

export default apiInstance;
