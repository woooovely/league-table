/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { 
        // 프리미어리그 순위
        source: "/api/pl/rank",
        destination:
          "https://api.football-data.org/v4/competitions/PL/standings",
      },
      {
        // 프리미어리그 득점왕
        source: "/api/pl/scorer",
        destination: "https://api.football-data.org/v4/competitions/PL/scorers",
      },
      {
        // 프리미어리그 뉴스
        source: "/api/pl/news",
        destination: encodeURI(
          "https://openapi.naver.com/v1/search/news.json?query=%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4%EB%A6%AC%EA%B7%B8&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820"
        ),
      },
    ];
  },
};

module.exports = nextConfig;
