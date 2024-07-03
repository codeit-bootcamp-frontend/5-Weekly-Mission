import axios, { InternalAxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';

const INSTANCE = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/linkbrary/v1',
});

INSTANCE.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const session = await getSession();
    if (config.headers['exclude-access-token']) {
      delete config.headers['exclude-access-token'];
      return config;
    }
    if (session) {
      const accessToken = session.accessToken;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default INSTANCE;
