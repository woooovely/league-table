import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PlayerCardWrap = styled.section`
  border-radius: 16px;
  border: 1px solid #eaeaea;
  width: 65%;
  padding: 32px 32px 24px 32px;
`;

export const NameAndTeam = styled.div`
  height: 80px;
`;

export const PlayerName = styled.h1`
  font-size: 28px;
  letter-spacing: 1.5px;
`;

export const Team = styled.div`
  display: flex;
  gap: 10px;
  font-size: 19px;
`;

export const PlayerBio = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 250px));
`;

export const PlayerBioStat = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  gap: 6px;
  span {
    color: gray;
  }
`;
