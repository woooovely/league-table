import Head from "next/head";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import * as S from '@/styles/league/news';
import cheerio from 'cheerio';
import thumbnail from '@/public/league_thumbnail.svg'

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
    )
}

export const getServerSideProps = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/league/news", {
            headers: {
                "X-Naver-Client-Id": process.env.NAVER_API_TOKEN,
                "X-Naver-Client-Secret": process.env.NAVER_SECRET_TOKEN
            }
        })
        const newsData = response.data;

        return {
            props: {
                items: newsData.items,
            }
        }
    } catch (error) {
        console.error(error);
        return {
            props: {
                items: [],
            }
        }
    }
}

export default LeagueNews;