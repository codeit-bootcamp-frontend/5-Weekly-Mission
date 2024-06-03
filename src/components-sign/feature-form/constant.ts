const SIGN_INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MESSAGE_CLASSNAME = "error-message-on";
const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

export const toggleIcon = {
  on: {
    src: "/images/eye-on.svg",
    alt: "비밀번호 보임 상태 아이콘",
    type: "text",
  },
  off: {
    src: "/images/eye-off.svg",
    alt: "비밀번호 숨겨짐 상태 아이콘",
    type: "password",
  },
};

export const testUser = {
  id: "test@codeit.com",
  password: "codeit101",
};

export const isIdValid = (id: string) => {
  return new RegExp(emailRegex).test(id);
};

export function isPwdValid(Pwd: string) {
  const isEightLettersOrMore = Pwd.length >= 8;
  const isNumberAndCharacter = Pwd.match(/[0-9]/g) && Pwd.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && isNumberAndCharacter;
}
