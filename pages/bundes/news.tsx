import Head from "next/head";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import * as S from "@/styles/bundes/news";
import thumbnail from "@/public/bundes_thumbnail.svg";
import cheerio from "cheerio";
import { NewsDataTypes } from "@/types/news";
import NewsTemplate from "@/components/NewsTemplate/NewsTemplate";

interface NewsProps {
  items: NewsDataTypes[];
}

const BundesNews = ({ items }: NewsProps) => {
  return (
    <div>
      <Head>
        <title>분데스리가 뉴스</title>
      </Head>
      <MainHeader />
      <SubHeader league="bundes" />
      <NewsTemplate items={items} league="bundes" />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://openapi.naver.com/v1/search/news.json?query=%EB%B6%84%EB%8D%B0%EC%8A%A4%EB%A6%AC%EA%B0%80&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820",
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

export default BundesNews;
