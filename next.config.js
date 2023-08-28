/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/pl/rank",
        destination: `https://api.football-data.org/v4/competitions/PL/standings`,
      },
    ];
  },
};

module.exports = nextConfig;
