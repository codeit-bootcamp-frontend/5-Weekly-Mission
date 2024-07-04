/**
 * 애플리케이션의 라우트 경로를 정의한 상수 객체입니다.
 *
 * @constant
 * @type {Object}
 * @property {string} 랜딩 - 메인 페이지 경로입니다.
 * @property {string} 로그인 - 로그인 페이지 경로입니다.
 * @property {string} 회원가입 - 회원가입 페이지 경로입니다.
 * @property {string} 폴더 - 폴더 페이지 경로입니다.
 * @property {string} 개인정보처리방침 - 개인정보 처리방침 페이지 경로입니다.
 * @property {string} FAQ - 자주 묻는 질문 페이지 경로입니다.
 */
export const ROUTE = {
  랜딩: "/",
  로그인: "/signin",
  회원가입: "/signup",
  폴더: "/folder",
  개인정보처리방침: "/privacy",
  FAQ: "/faq",
};

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const year = month * 12;

/**
 * 시간 단위를 밀리초로 변환한 상수 객체입니다.
 *
 * @constant
 * @type {Object}
 * @property {number} second - 1초를 밀리초로 나타낸 값입니다.
 * @property {number} minute - 1분을 밀리초로 나타낸 값입니다.
 * @property {number} hour - 1시간을 밀리초로 나타낸 값입니다.
 * @property {number} day - 1일을 밀리초로 나타낸 값입니다.
 * @property {number} month - 1달(31일)을 밀리초로 나타낸 값입니다.
 * @property {number} year - 1년(12개월)을 밀리초로 나타낸 값입니다.
 */
export const TIME_IN_MILLISECONDS = {
  second,
  minute,
  hour,
  day,
  month,
  year,
};

/**
 * 애플리케이션의 루트 DOM 요소의 ID입니다.
 *
 * @constant
 * @type {string}
 */
export const ROOT_ID = "root";

/**
 * 폴더의 기본 데이터를 정의한 객체입니다.
 *
 * @constant
 * @type {Object}
 * @property {string} profileImage - 폴더 소유자의 프로필 이미지 URL입니다.
 * @property {string} ownerName - 폴더 소유자의 이름입니다.
 * @property {string} folderName - 폴더의 이름입니다.
 * @property {Array} links - 폴더에 포함된 링크의 배열입니다.
 */
export const DEFAULT_FOLDER_DATA = {
  profileImage: "",
  ownerName: "",
  folderName: "",
  links: [],
};

/**
 * 모든 링크를 나타내는 ID입니다.
 *
 * @constant
 * @type {string}
 */
export const ALL_LINKS_ID = "all";

export const DEFAULT_FOLDER = {
  id: 0,
  name: "",
  userId: 0,
  createdAt: "",
};

export const DEFAULT_USER = {
  id: 0,
  name: "",
  email: "",
  imageSource: "",
};
