import { Matches } from "@/types/matches";
import {
  AwayTeamContainer,
  AwayTeamLogoConatiner,
  AwayTeamName,
  Container,
  HomeTeamContainer,
  HomeTeamLogoContainer,
  HomeTeamName,
  MatchContainer,
  MatchesContainer,
  MatchTime,
  MatchType,
  ScoreContainer,
  Scored,
  Text,
  Wrapper,
} from "./MatchList-style";
import { plTeamsName } from "@/constants/constants";
import Image from "next/image";
import { format, toZonedTime } from "date-fns-tz";
import { shortTeamName } from "@/constants/short-name";

interface MatchListProps {
  data: Matches[];
}

const MatchList = ({ data }: MatchListProps) => {
  const convertToKoreaTime = (utcDate: string) => {
    const utc = utcDate;
    const timeZone = "Asia/Seoul";

    const zonedDate = toZonedTime(utc, timeZone);
    const formattedDate = format(zonedDate, "yyyy-MM-dd HH:mm:ss", {
      timeZone,
    });

    return formattedDate;
  };

  return (
    <Wrapper>
      {data.length > 0 ? (
        <MatchesContainer>
          {data.map((item) => (
            <MatchContainer key={item.id}>
              <Container>
                {item.status === "FINISHED" && <MatchType>경기 종료</MatchType>}
                <HomeTeamContainer>
                  <HomeTeamName>
                    {shortTeamName[item.homeTeam.shortName]}
                  </HomeTeamName>
                  <HomeTeamLogoContainer>
                    <Image
                      src={item.homeTeam.crest}
                      width={22}
                      height={22}
                      alt={item.homeTeam.name}
                    />
                  </HomeTeamLogoContainer>
                </HomeTeamContainer>
              </Container>
              {item.status === "FINISHED" ? (
                <ScoreContainer>
                  <Scored>{`${item.score.fullTime.home} - ${item.score.fullTime.away}`}</Scored>
                </ScoreContainer>
              ) : (
                <MatchTime>
                  {convertToKoreaTime(item.utcDate).slice(11, 16)}
                </MatchTime>
              )}
              <AwayTeamContainer>
                <AwayTeamLogoConatiner>
                  <Image
                    src={item.awayTeam.crest}
                    width={22}
                    height={22}
                    alt={item.awayTeam.name}
                  />
                </AwayTeamLogoConatiner>
                <AwayTeamName>
                  {shortTeamName[item.awayTeam.shortName]}
                </AwayTeamName>
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
