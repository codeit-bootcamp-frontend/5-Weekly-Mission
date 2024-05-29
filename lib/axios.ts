import { removeLocalStorage, setLocalStorage } from '@/src/utils/localStorage';
import axios from 'axios';
export const ACCESS_TOKEN_KEY = 'accessToken';

// 인증 토큰을 가져오는 함수
const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const instance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api',
});
