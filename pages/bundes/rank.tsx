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

const BundesRank = ({ teams, competition, season }: TableDataProps) => {
  return (
    <div>
      <Head>
        <title>24-25 분데스리가 순위</title>
      </Head>
      <MainHeader />
      <SubHeader league="bundes" />
      <RankTable teams={teams} competition={competition} season={season} />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/BL1/standings",
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
        teams: [],
        competition: {},
        season: {},
      },
    };
  }
};

export default BundesRank;
