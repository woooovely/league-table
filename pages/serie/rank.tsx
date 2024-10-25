import Head from "next/head";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import * as S from "@/styles/serie/rank";
import { serieTeamName } from "@/constants/constants";
import { SeasonProps, Team } from "@/types/rank-table";
import { CompetitionProps } from "@/types/scorer-type";
import RankTable from "@/components/RankTable/RankTable";

interface TableDataProps {
  teams: Team[];
  competition: CompetitionProps;
  season: SeasonProps;
}

const SerieRank = ({ teams, competition, season }: TableDataProps) => {
  return (
    <div>
      <Head>
        <title>23-24 세리에A 순위</title>
      </Head>
      <MainHeader />
      <SubHeader league="serie" />
      <RankTable teams={teams} competition={competition} season={season} />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/SA/standings",
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

export default SerieRank;
