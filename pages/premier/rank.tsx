import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import axios from "axios";
import RankTable from "@/components/RankTable/RankTable";
import { SeasonProps, Team } from "@/types/rank-table";
import { Competition } from "@/types/competition";

interface TableDataProps {
  teams: Team[];
  competition: Competition;
  season: SeasonProps;
}

const PremierRank = ({ teams, competition, season }: TableDataProps) => {
  return (
    <div>
      <Head>
        <title>24-25 프리미어리그 순위</title>
      </Head>
      <MainHeader />
      <SubHeader league="premier" />
      <RankTable teams={teams} competition={competition} season={season} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get(
    `https://api.football-data.org/v4/competitions/PL/standings`,
    {
      headers: {
        "X-Auth-Token": process.env.API_TOKEN as string,
      },
    }
  );

  const tableData = response.data;
  console.log(tableData);

  return {
    props: {
      teams: tableData.standings[0].table,
      competition: tableData.competition,
      season: tableData.season,
    },
  };
};

export default PremierRank;
