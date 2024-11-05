import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PlayerHeader = styled.section`
  border-radius: 16px;
  border: 1px solid #eaeaea;
  width: 80%;
`;

export const PlayerHead = styled.header`
  padding: 32px 32px 0px;
`;

export const NameAndTeam = styled.div`
  height: 80px;
`;

export const PlayerName = styled.h1`
  font-size: 28px;
  letter-spacing: 1.5px;
`;

export const TeamLink = styled(Link)``;

export const Team = styled.div`
  font-size: 19px;
  display: flex;
  gap: 10px;
`;

export const BioAndPosition = styled.div``;

export const BioContainer = styled.div`
  padding: 24px;
  width: 50%;
`;

export const PlayerBio = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

export const PlayerBioStat = styled.div`
    display: flex;
    flex-direction: column;
    width: 176px;
    height: 56px;
    gap: 6px;
    padding-bottom: 16px;
`

export const PlayerBioStatValue = styled.div`
    display: flex;
    font-size: 16px;
`;

export const PlayerBioStatTitle = styled.div`
    span {
        font-size: 16px;
        color: gray;
    }
`
