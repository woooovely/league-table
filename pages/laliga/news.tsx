import Head from "next/head";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import { NewsDataTypes } from "@/types/news";
import NewsTemplate from "@/components/NewsTemplate/NewsTemplate";

interface NewsProps {
  items: NewsDataTypes[];
}

const LaligaNews = ({ items }: NewsProps) => {
  return (
    <div>
      <Head>
        <title>라리가 뉴스</title>
      </Head>
      <MainHeader />
      <SubHeader league="laliga" />
      <NewsTemplate items={items} league="laliga" />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://openapi.naver.com/v1/search/news.json?query=%EB%9D%BC%EB%A6%AC%EA%B0%80&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820",
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

export default LaligaNews;
