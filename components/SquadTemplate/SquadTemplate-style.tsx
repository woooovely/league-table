import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap: 16px;
`;

export const PositionCard = styled.section`
  width: 60%;
  border: 2px solid #eaeaea;
  border-radius: 10px;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 16px;
`;

export const SquadTilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max-content, 350px));
  gap: 10px;
  padding-top: 15px;
`;

export const SquadTile = styled(Link)`
    border-radius: 6px;
    border: 1px solid #eaeaea;
    padding: 0px 20px;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const PlayerDetailTile = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PlayerName = styled.span`
    font-size: 18px;
`

export const Nationality = styled.span`
    font-size: 14px;
    color: gray;
`
