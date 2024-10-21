import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import axios from "axios";
import * as S from "@/styles/pl/news";
import thumbnail from "@/public/premier_thumbnail.svg";
import cheerio from "cheerio";

interface News {
  title: string;
  originallink: string;
  link: string;
  description: string;
}

interface NewsProps {
  items: News[];
}

const PremierNews = ({ items }: NewsProps) => {
  return (
    <div>
      <Head>
        <title>프리미어리그 뉴스</title>
      </Head>
      <MainHeader />
      <SubHeader league="premier" />
      <S.NewsContainer>
        <S.Title>인기 급상승 뉴스</S.Title>
        <S.NewsItemBlock>
          {items.map((item: News, index: number) => (
            <S.NewsLink href={item.originallink} key={index + 1}>
              <S.Thumbnail>
                <S.NewsImage src={thumbnail} alt="썸네일" />
                <S.Detail>
                  <S.NewsTitle>
                    {cheerio.load(item.title).root().text()}
                  </S.NewsTitle>
                  {cheerio.load(item.description).root().text()}
                </S.Detail>
              </S.Thumbnail>
            </S.NewsLink>
          ))}
        </S.NewsItemBlock>
      </S.NewsContainer>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get("https://openapi.naver.com/v1/search/news.json?query=%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4%EB%A6%AC%EA%B7%B8&display=10&start=1&sort=sim&startDate=20230801&endDate=20230820", {
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
