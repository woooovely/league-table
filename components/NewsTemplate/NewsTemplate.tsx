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
import thumbnail from "@/public/champions_thumbnail.png";
import cheerio from "cheerio";

interface NewsProps {
  items: NewsDataTypes[];
}

const NewsTemplate = ({ items }: NewsProps) => {
  return (
    <Wrapper>
      <NewsContainer>
        <Title>인기 급상승 뉴스</Title>
        <NewsItemBlock>
          {items.map((data, index) => (
            <NewsLink href={data.originallink} key={index}>
              <Thumbnail>
                <NewsImage
                  src={thumbnail}
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
