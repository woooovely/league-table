import { Scorer } from "@/types/scorer-type";
import {
  BoxContainer,
  Container,
  Goals,
  Lists,
  LogoContainer,
  Nation,
  PlayedMatches,
  Player,
  Rank,
  Table,
  TableTitle,
  TeamContainer,
  TeamLogo,
  Wrapper,
} from "./ScorerRank-style";
import Image from "next/image";
import { nationality } from "@/constants/nationality";
import { Competition } from "@/types/competition";
import { convertPlayerName, convertTeamName } from "@/utils/convert";
import Link from "next/link";

interface ScorerDataProps {
  scorers: Scorer[];
  competition: Competition;
}

const ScorerRank = ({ scorers, competition }: ScorerDataProps) => {
  return (
    <Wrapper>
      <LogoContainer>
        <Image
          src={competition.emblem}
          alt="리그 로고"
          width={200}
          height={200}
        />
      </LogoContainer>
      <BoxContainer>
        <TableTitle>
          <Lists>순위</Lists>
          <Lists>선수명</Lists>
          <Lists>경기</Lists>
          <Lists>득점</Lists>
          <Lists>소속팀</Lists>
          <Lists>국적</Lists>
        </TableTitle>
        {scorers.map((item, index) => (
          <Container key={item.player.id}>
            <Table>
              <Rank>{index + 1}</Rank>
              <Player>
                <Link href={`/players/${item.player.id}`}>
                  {convertPlayerName(competition.name, item.player.name)}
                </Link>
              </Player>
              <PlayedMatches>{item.playedMatches}</PlayedMatches>
              <Goals>{item.goals}</Goals>
              <TeamContainer>
                <TeamLogo src={item.team.crest} alt="팀 로고" />
                <Link href={`/teams/${item.team.id}/overview`}>
                  {convertTeamName(competition.name, item.team.name)}
                </Link>
              </TeamContainer>
              <Nation>{nationality[item.player.nationality]}</Nation>
            </Table>
          </Container>
        ))}
      </BoxContainer>
    </Wrapper>
  );
};

export default ScorerRank;
