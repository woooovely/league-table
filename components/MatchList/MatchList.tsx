import { Matches } from "@/types/matches";
import {
  AwayTeamContainer,
  Container,
  HomeTeamContainer,
  InfoText,
  MatchContainer,
  MatchesContainer,
  MatchTime,
  MatchType,
  ScoreContainer,
  Scored,
  Text,
  Wrapper,
} from "./MatchList-style";
import Image from "next/image";
import { shortTeamName } from "@/constants/short-name";

interface MatchListProps {
  data: Matches[];
}

const MatchList = ({ data }: MatchListProps) => {
  return (
    <Wrapper>
      <InfoText>*현지시간 기준</InfoText>
      {data.length > 0 ? (
        <MatchesContainer>
          {data.map((item) => (
            <MatchContainer key={item.id}>
              <Container>
                {item.status === "FINISHED" && <MatchType>경기 종료</MatchType>}
                <HomeTeamContainer>
                  <span>{shortTeamName[item.homeTeam.shortName]}</span>
                  <Image
                    src={item.homeTeam.crest}
                    alt={item.homeTeam.name}
                    width={22}
                    height={22}
                  />
                </HomeTeamContainer>
              </Container>
              {item.status === "FINISHED" ? (
                <ScoreContainer>
                  <Scored>{`${item.score.fullTime.home} - ${item.score.fullTime.away}`}</Scored>
                </ScoreContainer>
              ) : (
                <MatchTime>{item.utcDate.slice(11, 16)}</MatchTime>
              )}
              <AwayTeamContainer>
                <Image
                  src={item.awayTeam.crest}
                  alt={item.awayTeam.name}
                  width={22}
                  height={22}
                />
                <span>{shortTeamName[item.awayTeam.shortName]}</span>
              </AwayTeamContainer>
            </MatchContainer>
          ))}
        </MatchesContainer>
      ) : (
        <Text>해당 날짜에는 경기가 없어요!</Text>
      )}
    </Wrapper>
  );
};

export default MatchList;
