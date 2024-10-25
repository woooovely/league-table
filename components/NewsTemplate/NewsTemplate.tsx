import { NewsDataTypes } from "@/types/news";
import {
  Detail,
  NewsContainer,
  NewsImage,
  NewsItemBlock,
  NewsLink,
  NewsTitle,
  Thumbnail,
  Title,
  Wrapper,
} from "./NewsTemplate-style";
import premierThumbnail from '@/public/premier_thumbnail.svg';
import bundesThumbnail from '@/public/bundes_thumbnail.svg';
import laligaThumbnail from '@/public/laliga_thumbnail.svg';
import serieThumbnail from '@/public/serie_thumbnail.svg';
import leagueThumbnail from '@/public/league_thumbnail.svg';
import championsThumbnail from "@/public/champions_thumbnail.png";
import cheerio from "cheerio";

interface NewsProps {
  items: NewsDataTypes[];
  league: string;
}

const NewsTemplate = ({ items, league }: NewsProps) => {
  const handleThumbnail = () => {
    switch (league) {
      case 'premier':
        return premierThumbnail;

      case 'bundes':
        return bundesThumbnail;

      case 'laliga':
        return laligaThumbnail;

      case 'serie':
        return serieThumbnail;

      case 'league':
        return leagueThumbnail;

      default:
        return championsThumbnail;
    }
  }

  return (
    <Wrapper>
      <NewsContainer>
        <Title>인기 급상승 뉴스</Title>
        <NewsItemBlock>
          {items.map((data, index) => (
            <NewsLink href={data.originallink} key={index}>
              <Thumbnail>
                <NewsImage
                  src={handleThumbnail()}
                  alt="썸네일"
                  width={200}
                  height={200}
                />
                <Detail>
                  <NewsTitle>
                    {cheerio.load(data.title).root().text()}
                  </NewsTitle>
                  {cheerio.load(data.description).root().text()}
                </Detail>
              </Thumbnail>
            </NewsLink>
          ))}
        </NewsItemBlock>
      </NewsContainer>
    </Wrapper>
  );
};

export default NewsTemplate;
