import { SeasonProps, Team } from "@/types/rank-table";
import {
  Body,
  Head,
  ListTd,
  ListTr,
  LogoContainer,
  Rank,
  SeasonDate,
  Table,
  TableTh,
  TableTr,
  TeamLogo,
  TeamName,
  Wrapper,
} from "./RankTable-style";
import Image from "next/image";
import { convertTeamName } from "@/utils/convert";
import Link from "next/link";
import { Competition } from "@/types/competition";

interface TableDataProps {
  teams: Team[];
  competition: Competition;
  season: SeasonProps;
}

const RankTable = ({ teams, competition, season }: TableDataProps) => {
  return (
    <Wrapper>
      <LogoContainer>
        <Image
          src={competition.emblem}
          width={200}
          height={200}
          alt={competition.name}
        />
      </LogoContainer>
      <SeasonDate>
        {season.startDate} ~ {season.endDate}
      </SeasonDate>
      <Table>
        <Head>
          <TableTr>
            <TableTh>순위</TableTh>
            <TableTh>클럽</TableTh>
            <TableTh>경기수</TableTh>
            <TableTh>승</TableTh>
            <TableTh>무</TableTh>
            <TableTh>패</TableTh>
            <TableTh>득실차</TableTh>
            <TableTh>승점</TableTh>
          </TableTr>
        </Head>
        <Body>
          {teams.map((item) => (
            <ListTr key={item.id}>
              <ListTd>
                <Rank>{item.position}</Rank>
              </ListTd>
              <ListTd>
                <TeamLogo src={item.team.crest} alt="팀 로고" />
                <TeamName>
                  <Link href={`/teams/${item.team.id}/overview`}>
                    {convertTeamName(competition.name, item.team.name)}
                  </Link>
                </TeamName>
              </ListTd>
              <ListTd>{item.playedGames}</ListTd>
              <ListTd>{item.won}</ListTd>
              <ListTd>{item.draw}</ListTd>
              <ListTd>{item.lost}</ListTd>
              <ListTd>{item.goalDifference}</ListTd>
              <ListTd>{item.points}</ListTd>
            </ListTr>
          ))}
        </Body>
      </Table>
    </Wrapper>
  );
};

export default RankTable;
