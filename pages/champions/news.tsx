import MainHeader from "@/components/MainHeader";
import NewsTemplate from "@/components/NewsTemplate/NewsTemplate";
import SubHeader from "@/components/SubHeader";
import { NewsDataTypes } from "@/types/news";
import axios from "axios";
import Head from "next/head";

interface NewsProps {
  items: NewsDataTypes[];
}

const ChampionsNews = ({ items }: NewsProps) => {
  return (
    <div>
      <Head>
        <title>챔피언스리그 뉴스</title>
      </Head>
      <MainHeader />
      <SubHeader league="champions" />
      <NewsTemplate items={items} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const headers = {
    "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
    "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
  };

  const response = await axios.get(
    "https://openapi.naver.com/v1/search/news.json?query=%EC%B1%94%ED%94%BC%EC%96%B8%EC%8A%A4%EB%A6%AC%EA%B7%B8&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820",
    { headers }
  );
  const data = response.data;

  return {
    props: {
      items: data.items,
    },
  };
};

export default ChampionsNews;
