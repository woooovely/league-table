import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const MainHeader = () => {
  const router = useRouter();

  return (
    <>
      <HeaderContainer>
        <LogoText onClick={() => router.push("/")}>Soccer Table</LogoText>
        <CategoryContainer>
          <Categories>
            <LinkStyle href="/premier/rank">프리미어리그</LinkStyle>
          </Categories>
          <Categories>
            <LinkStyle href="/bundes/rank">분데스리가</LinkStyle>
          </Categories>
          <Categories>
            <LinkStyle href="/laliga/rank">라리가</LinkStyle>
          </Categories>
          <Categories>
            <LinkStyle href="/serie/rank">세리에A</LinkStyle>
          </Categories>
          <Categories>
            <LinkStyle href="/ligue/rank">리그1</LinkStyle>
          </Categories>
          <Categories>
            <LinkStyle href="/champions/rank">챔피언스리그</LinkStyle>
          </Categories>
        </CategoryContainer>
      </HeaderContainer>
    </>
  );
};

export default MainHeader;

const HeaderContainer = styled.nav`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #bebcbc;
`;

const LogoText = styled.h2`
  font-size: 26px;
  cursor: pointer;
`;

const CategoryContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

const Categories = styled.li`
  margin-right: 25px;
`;

const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
`;
