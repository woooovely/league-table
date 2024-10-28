import Head from "next/head";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import RankTable from "@/components/RankTable/RankTable";
import { SeasonProps, Team } from "@/types/rank-table";
import { CompetitionProps } from "@/types/scorer-type";

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
