import MainHeader from "@/components/MainHeader";
import RankTable from "@/components/RankTable/RankTable";
import SubHeader from "@/components/SubHeader";
import { CompetitonProps, SeasonProps, Team } from "@/types/rank-table";
import axios from "axios";
import Head from "next/head";

interface TableDataProps {
  teams: Team[];
  competition: CompetitonProps;
  season: SeasonProps;
}

const ChampionsRank = ({ teams, competition, season }: TableDataProps) => {
  return (
    <div>
      <Head>
        <title>24-25 챔피언스리그 매치데이 순위</title>
      </Head>
      <MainHeader />
      <SubHeader league="champions" />
      <RankTable teams={teams} competition={competition} season={season} />
    </div>
  );
};

export default ChampionsRank;

export const getServerSideProps = async () => {
  const headers = {
    "X-Auth-Token": process.env.API_TOKEN,
  };

  const response = await axios.get(
    `https://api.football-data.org/v4/competitions/CL/standings`,
    { headers }
  );

  const data = response.data;

  return {
    props: {
      teams: data.standings[0].table,
      competition: data.competition,
      season: data.season,
    },
  };
};
