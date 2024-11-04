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

const SerieNews = ({ items }: NewsProps) => {
  return (
    <div>
      <Head>
        <title>세리에A 뉴스</title>
      </Head>
      <MainHeader />
      <SubHeader league="serie" />
      <NewsTemplate league="serie" items={items} />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get("https://openapi.naver.com/v1/search/news.json?query=%EC%84%B8%EB%A6%AC%EC%97%90A&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820", {
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

export default SerieNews;
