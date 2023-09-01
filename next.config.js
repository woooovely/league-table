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
      {
        // 분데스리가 순위
        source: "/api/bundes/rank",
        destination:
          "https://api.football-data.org/v4/competitions/BL1/standings",
      },
      {
        // 분데스리가 득점왕
        source: "/api/bundes/scorer",
        destination:
          "https://api.football-data.org/v4/competitions/BL1/scorers",
      },
      {
        // 분데스리가 뉴스
        source: "/api/bundes/news",
        destination: encodeURI(
          "https://openapi.naver.com/v1/search/news.json?query=%EB%B6%84%EB%8D%B0%EC%8A%A4%EB%A6%AC%EA%B0%80&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820"
        ),
      },
      {
        // 라리가 순위
        source: "/api/laliga/rank",
        destination:
          "https://api.football-data.org/v4/competitions/PD/standings",
      },
      {
        // 라리가 득점왕
        source: "/api/laliga/scorer",
        destination: "https://api.football-data.org/v4/competitions/PD/scorers",
      },
      {
        // 라리가 뉴스
        source: "/api/laliga/news",
        destination: encodeURI(
          "https://openapi.naver.com/v1/search/news.json?query=%EB%9D%BC%EB%A6%AC%EA%B0%80&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820"
        ),
      },
      {
        // 세리에A 순위
        source: "/api/serie/rank",
        destination:
          "https://api.football-data.org/v4/competitions/SA/standings",
      },
      {
        // 세리에A 득점왕
        source: "/api/serie/scorer",
        destination: "https://api.football-data.org/v4/competitions/SA/scorers",
      },
      {
        // 세리에A 뉴스
        source: "/api/serie/news",
        destination: encodeURI(
          "https://openapi.naver.com/v1/search/news.json?query=%EC%84%B8%EB%A6%AC%EC%97%90A&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820"
        ),
      },
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
