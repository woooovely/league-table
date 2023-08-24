import styled from 'styled-components';

interface SubHeaderProps {
    league: string;
}


const SubHeader = ({ league }: SubHeaderProps) => {
    return (
        <>
          <HeaderContainer league={league}>
            <CategoryContainer>
                <Categories>리그 순위</Categories>
                <Categories>득점왕</Categories>
                <Categories>리그 소식</Categories>
            </CategoryContainer>
          </HeaderContainer>
        </>
    )
}

export default SubHeader;

const Categories = styled.li`
    
`

const CategoryContainer = styled.ul`
    
`

const HeaderContainer = styled.nav<SubHeaderProps>`
  width: 100%;
  height: 90px;
  background-image: ${(props) => (props.league === "premier" ? "url('/premier_header.svg')" : "url('../assets/svgs/league.svg')")};
  background-size: cover;
`