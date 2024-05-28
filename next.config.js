module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        domains: [
            "ssl.pstatic.net",
            "data1.pokemonkorea.co.kr",
            "s.pstatic.net",
            "jasonwatmore.com",
            "codeit-images.codeit.com",
            "codeit-frontend.codeit.com",
            "reactjs.org",
            "assets.vercel.com",
            "tanstack.com",
            "storybook.js.org",
            "testing-library.com",
            "static.cdninstagram.com",
            "cdn-icons-png.flaticon.com",
            "avatars.githubusercontent.com",
        ],
    },
};
