//API

export const KAKAO_KEY = "a841341da0099a5d1291638b48030745";
export const CODEIT_BASE_URL =
  "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
export const SAMPLE_USER_ID = 1;
export const SOCIALLINKS = [
  { href: "https://www.kakaocorp.com/page", src: "/images/kakaotalk.png" },
  { href: "https://www.google.com", src: "/images/google.png" },
];

//Date

export const MINUTE: number = 60 * 1000;
export const HOUR: number = 60 * MINUTE;
export const DAY: number = 24 * HOUR;
export const MONTH: number = 30 * DAY;
export const YEAR: number = 12 * MONTH;

//Regex

export const PW_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const EMAIL_PATTERN =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
