/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: "https://bootcamp-api.codeit.kr/api",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-front.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "ssl.pstatic.net",
        port: "",
        pathname: "/sstatic/search/common/**",
      },
    ],
  },
};

module.exports = nextConfig;
