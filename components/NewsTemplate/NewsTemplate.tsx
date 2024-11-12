import { NewsDataTypes } from "@/types/news";
import {
  Detail,
  NewsImage,
  NewsItemBlock,
  NewsLink,
  NewsTitle,
  Thumbnail,
  Title,
  Wrapper,
} from "./NewsTemplate-style";
import premierThumbnail from "@/public/premier_thumbnail.svg";
import bundesThumbnail from "@/public/bundes_thumbnail.svg";
import laligaThumbnail from "@/public/laliga_thumbnail.svg";
import serieThumbnail from "@/public/serie_thumbnail.svg";
import leagueThumbnail from "@/public/league_thumbnail.svg";
import championsThumbnail from "@/public/champions_thumbnail.png";
import { load } from "cheerio";

interface NewsProps {
  items: NewsDataTypes[];
  league: string;
}

const NewsTemplate = ({ items, league }: NewsProps) => {
  const handleThumbnail = () => {
    switch (league) {
      case "premier":
        return premierThumbnail;

      case "bundes":
        return bundesThumbnail;

      case "laliga":
        return laligaThumbnail;

      case "serie":
        return serieThumbnail;

      case "ligue":
        return leagueThumbnail;

      default:
        return championsThumbnail;
    }
  };

  return (
    <Wrapper>
      <Title>인기 급상승 뉴스</Title>
      <NewsItemBlock>
        {items.map((data, index) => (
          <NewsLink>
            <Thumbnail href={data.originallink} target="_blank" key={index}>
              <NewsImage src={handleThumbnail()} alt="썸네일" />
              <Detail>
                <NewsTitle>{load(data.title).root().text()}</NewsTitle>
                {load(data.description).root().text()}
              </Detail>
            </Thumbnail>
          </NewsLink>
        ))}
      </NewsItemBlock>
    </Wrapper>
  );
};

export default NewsTemplate;
