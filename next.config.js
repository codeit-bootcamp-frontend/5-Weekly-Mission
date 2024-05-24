const externalImages = [
  {
    hostname: "https://codeit-images.codeit.com",
    pathname: "/badges/COMPLETE_100_LESSONS.png",
  },
  {
    hostname: "codeit-frontend.codeit.com",
    pathname: "/static/images/brand/og_tag.png",
  },
  {
    hostname: "reactjs.org",
    pathname: "/logo-og.png",
  },
  {
    hostname: "assets.vercel.com",
    pathname: "/image/upload/front/nextjs/twitter-card.png",
  },
  {
    hostname: "tanstack.com",
    pathname: "/build/_assets/**",
  },
  {
    hostname: "storybook.js.org",
    pathname: "/images/social/og-home.jpg",
  },
  {
    hostname: "testing-library.com",
    pathname: "/img/octopus-128x128.png",
  },
  {
    hostname: "static.cdninstagram.com",
    pathname: "/rsrc.php/v3/yt/r/30PrGfR3xhB.png",
  },
  {
    hostname: "s.pstatic.net",
    pathname: "/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // NOTE: SVG 파일을 React 컴포넌트로 불러오기 위한 설정 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  images: {
    remotePatterns: externalImages.map(({ hostname, pathname }) => {
      return {
        protocol: "https",
        hostname: hostname,
        port: "",
        pathname: pathname,
      };
    }),
  },
};

module.exports = nextConfig;
