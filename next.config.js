/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        // 리그1 순위
        source: "/api/league/rank",
        destination:
          "https://api.football-data.org/v4/competitions/FL1/standings",
      },
      {
        // 리그1 득점왕
        source: "/api/league/scorer",
        destination:
          "https://api.football-data.org/v4/competitions/FL1/scorers",
      },
      {
        // 리그1 뉴스
        source: "/api/league/news",
        destination: encodeURI(
          "https://openapi.naver.com/v1/search/news.json?query=%EB%A6%AC%EA%B7%B8%EC%95%99&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820"
        ),
      },
    ];
  },
};

module.exports = nextConfig;
