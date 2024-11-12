import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { categories } from "@/data/categories";

const MainHeader = () => {
  const router = useRouter();

  return (
    <>
      <HeaderContainer>
        <LinkStyle href="/premier/rank">
          <LogoText>Soccer Table</LogoText>
        </LinkStyle>
        <CategoryContainer>
          {categories.map((item, index) => (
            <Categories key={index}>
              <LinkStyle href={`${item.link}/rank`}>{item.name}</LinkStyle>
            </Categories>
          ))}
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
