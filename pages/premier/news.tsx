import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import axios from "axios";
import * as S from "@/styles/pl/news";
import thumbnail from "@/public/premier_thumbnail.svg";
import cheerio from "cheerio";
import { NewsDataTypes } from "@/types/news";
import NewsTemplate from "@/components/NewsTemplate/NewsTemplate";

interface NewsProps {
  items: NewsDataTypes[];
}

const PremierNews = ({ items }: NewsProps) => {
  return (
    <div>
      <Head>
        <title>프리미어리그 뉴스</title>
      </Head>
      <MainHeader />
      <SubHeader league="premier" />
      <NewsTemplate items={items} league="premier" />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get("https://openapi.naver.com/v1/search/news.json?query=잉글랜드 프리미어리그&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820", {
      headers: {
        "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
      },
    });

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

export default PremierNews;
