import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MatchesContainer = styled.div`
  border-radius: 16px;
  border: 1px solid #dfdfdf;
  padding: 10px;
  margin-top: 40px;
`;

export const MatchContainer = styled.div`
  position: relative;
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: 1fr auto 1fr;
  gap: 20px;
  min-height: 64px;
  cursor: pointer;
  &:hover {
    background: #eaeaea;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const HomeTeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-left: 40px;
`;

export const MatchTime = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const HomeTeamName = styled.span``;

export const HomeTeamLogoContainer = styled.div``;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 세로 가운데 정렬 */
  flex-direction: row; /* 가로 방향으로 배치 */
  padding: 0 20px;
`;

export const Scored = styled.span`
  font-weight: 600;
`;

export const AwayTeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-right: 40px;
`;

export const AwayTeamName = styled.span``;

export const AwayTeamLogoConatiner = styled.div``;

export const Text = styled.p`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;
`

export const MatchType = styled.span`
    font-size: 14px;
`
