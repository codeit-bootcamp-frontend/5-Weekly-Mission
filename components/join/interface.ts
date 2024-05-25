// 회원가입
export interface IJoinForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

// 로그인
export type loginForm = Omit<IJoinForm, 'passwordConfirm'>;
