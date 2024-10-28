import Head from "next/head";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import * as S from "@/styles/league/rank";
import { leagueTeamName } from "@/constants/constants";
import RankTable from "@/components/RankTable/RankTable";

interface CompetitionProps {
  id: number;
  name: string;
  emblem: string;
}

interface SeasonProps {
  id: number;
  startDate: string;
  endDate: string;
}

interface TeamProps {
  id: number;
  name: string;
  shortName: string;
  crest: string;
}

interface Team {
  id: number;
  position: number;
  team: TeamProps;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalDifference: number;
}

interface TableDataProps {
  teams: Team[];
  competition: CompetitionProps;
  season: SeasonProps;
}

const LeagueRank = ({ teams, competition, season }: TableDataProps) => {
  return (
    <div>
      <Head>
        <title>24-25 리그1 순위</title>
      </Head>
      <MainHeader />
      <SubHeader league="league" />
      <RankTable teams={teams} competition={competition} season={season} />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/FL1/standings",
      {
        headers: {
          "X-Auth-Token": process.env.API_TOKEN,
        },
      }
    );
    const tableData = response.data;

    return {
      props: {
        teams: tableData.standings[0].table,
        competition: tableData.competition,
        season: tableData.season,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        table: [],
        competition: {},
        season: {},
      },
    };
  }
};

export default LeagueRank;
