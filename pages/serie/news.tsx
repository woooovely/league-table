import Head from "next/head";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import * as S from '@/styles/serie/news';
import thumbnail from '@/public/serie_thumbnail.svg';
import cheerio from 'cheerio';

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
      <S.NewsContainer>
        <S.Title>인기 급상승 뉴스</S.Title>
        <S.NewsItemBlock>
            {items.map((data: News, index: number) => (
                <S.NewsLink href={data.originallink} key={index + 1}>
                    <S.Thumbnail>
                        <S.NewsImage src={thumbnail} alt="썸네일" />
                        <S.Detail>
                            <S.NewsTitle>
                                {cheerio.load(data.title).root().text()}
                            </S.NewsTitle>
                            {cheerio.load(data.description).root().text()}
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
