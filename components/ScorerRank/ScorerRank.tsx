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
import { convertPlayerName, convertTeamName } from "@/utils/convert";
import { Competition } from "@/types/competition";

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
                {convertPlayerName(competition.name, item.player.name)}
              </Player>
              <PlayedMatches>{item.playedMatches}</PlayedMatches>
              <Goals>{item.goals}</Goals>
              <TeamContainer>
                <TeamLogo src={item.team.crest} alt="팀 로고" />
                {convertTeamName(competition.name, item.team.name)}
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
