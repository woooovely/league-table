import MainHeader from "@/components/MainHeader";
import ScorerRank from "@/components/ScorerRank/ScorerRank";
import SubHeader from "@/components/SubHeader";
import { CompetitionProps, Scorer } from "@/types/scorer-type";
import axios from "axios";
import Head from "next/head";

interface ScoreDataProps {
  scorers: Scorer[];
  competition: CompetitionProps;
}

const ChampionsScorer = ({ scorers, competition }: ScoreDataProps) => {
  return (
    <div>
      <Head>
        <title>24-25 챔피언스리그 득점 순위</title>
      </Head>
      <MainHeader />
      <SubHeader league="champions" />
      <ScorerRank scorers={scorers} competition={competition} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const headers = {
    "X-Auth-Token": process.env.API_TOKEN,
  };

  const response = await axios.get(
    `https://api.football-data.org/v4/competitions/CL/scorers`,
    { headers }
  );

  const data = response.data;

  return {
    props: {
      scorers: data.scorers,
      competition: data.competition,
    },
  };
};

export default ChampionsScorer;
