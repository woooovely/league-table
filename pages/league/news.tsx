import Head from "next/head";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import NewsTemplate from "@/components/NewsTemplate/NewsTemplate";

interface News {
  title: string;
  originallink: string;
  link: string;
  description: string;
}

interface NewsProps {
  items: News[];
}

const LeagueNews = ({ items }: NewsProps) => {
  return (
    <div>
      <Head>
        <title>리그1 뉴스</title>
      </Head>
      <MainHeader />
      <SubHeader league="league" />
      <NewsTemplate items={items} league="league" />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://openapi.naver.com/v1/search/news.json?query=%EB%A6%AC%EA%B7%B8%EC%95%99&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820",
      {
        headers: {
          "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
        },
      }
    );
    const newsData = response.data;

    return {
      props: {
        items: newsData.items,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        items: [],
      },
    };
  }
};

export default LeagueNews;
