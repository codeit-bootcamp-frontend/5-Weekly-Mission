import axios from 'axios';
import instance from './instance';

export interface authRequest {
  email: string;
  password: string;
}

export interface authResponse {
  accessToken: string;
  refreshToken: string;
}

export async function signin({ email, password }: authRequest) {
  try {
    const result = await instance.post('/auth/sign-in', { email, password });

    return result.data as authResponse;
  } catch (error) {
    throw error;
  }
}

export async function signup({ email, password }: authRequest) {
  try {
    const result = await instance.post('/auth/sign-up', { email, password });

    return result.data as authResponse;
  } catch (error) {
    throw error;
  }
}
