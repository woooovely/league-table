import styled from "styled-components";
import Link from "next/link";

interface SubHeaderProps {
  league: string;
}

const SubHeader = ({ league }: SubHeaderProps) => {
  return (
    <>
      <HeaderContainer league={league}>
        <CategoryContainer>
          <Categories>
            <LinkStyle href={`/${league}/rank`} league={league}>
              리그 순위
            </LinkStyle>
          </Categories>
          <Categories>
            <LinkStyle href={`/${league}/scorer`} league={league}>
              득점왕
            </LinkStyle>
          </Categories>
          <Categories>
            <LinkStyle href={`/${league}/news`} league={league}>
              리그 소식
            </LinkStyle>
          </Categories>
          <Categories>
            <LinkStyle href={`/${league}/matches`} league={league}>
              경기 일정
            </LinkStyle>
          </Categories>
        </CategoryContainer>
      </HeaderContainer>
    </>
  );
};

export default SubHeader;

const LinkStyle = styled(Link)<SubHeaderProps>`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) =>
    props.league === "premier"
      ? "black"
      : props.league === "bundes"
      ? "white"
      : props.league === "laliga"
      ? "white"
      : props.league === "serie"
      ? "white"
      : "white"};
  font-size: 19px;
`;

const Categories = styled.li`
  margin-right: 40px;
`;

const CategoryContainer = styled.ul`
  display: flex;
  list-style: none;
  margin-left: auto;
  margin-right: 100px;
`;

const HeaderContainer = styled.nav<SubHeaderProps>`
  width: 100%;
  height: 90px;
  background-image: ${(props) =>
    props.league === "premier"
      ? "url('/premier_header.svg')"
      : props.league === "bundes"
      ? "url('/bundes_header.svg')"
      : props.league === "laliga"
      ? "url('/laliga_header.svg')"
      : props.league === "serie"
      ? "url('/serie_header.svg')"
      : props.league === "league"
      ? "url('/league_header.svg')"
      : "url('/champions_header.svg')"};
  background-size: cover;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0px;
`;
