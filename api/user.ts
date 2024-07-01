import axios, { AxiosError } from 'axios';
import instance from './instance';

export interface checkEmailRequest {
  email: string;
  password: string;
}

export interface checkEmailResponse {
  accessToken: string;
  refreshToken: string;
}

export async function checkEmail({ email }: { email: string }) {
  try {
    return await axios.post('http://localhost:3000/api/user/checkEmail', { email });
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 409) {
      throw new AxiosError(
        error.response.data.message ?? '이미 존재하는 이메일입니다.',
        error.response?.status.toString()
      );
    }
    throw new AxiosError('알 수 없는 에러');
  }
}

export interface User {
  id: number;
  name: string;
  image_source: string;
  email: string;
}

export async function getUser() {
  try {
    return (await instance.get('/users')).data[0] as User;
  } catch (error) {
    throw error;
  }
}
