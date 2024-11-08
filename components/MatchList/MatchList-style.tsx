import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 10px;
`;

export const InfoText = styled.p`
  font-size: 12px;
  color: red;
`;

export const MatchesContainer = styled.div`
  padding: 10px;
  border: 1px solid #dfdfdf;
  border-radius: 16px;
`;

export const MatchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 0 20px;
  position: relative;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  height: 64px;
  cursor: pointer;
  &:hover {
    background: #eaeaea;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;

export const HomeTeamContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MatchTime = styled.span`
  width: 100px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Scored = styled.span`
  font-weight: 600;
`;

export const AwayTeamContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const MatchType = styled.span`
  font-size: 14px;
`;
