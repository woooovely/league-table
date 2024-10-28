import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";
import axios from "axios";
import * as S from "@/styles/pl/scorer";
import { nationality, plPlayerName, plTeamsName } from "@/constants/constants";
import { CompetitionProps, Scorer } from "@/types/scorer-type";
import ScorerRank from "@/components/ScorerRank/ScorerRank";

interface ScorerDataProps {
  scorers: Scorer[];
  competition: CompetitionProps;
}

const PremierScorer = ({ scorers, competition }: ScorerDataProps) => {
  return (
    <div>
      <Head>
        <title>24-25 프리미어리그 득점왕</title>
      </Head>
      <MainHeader />
      <SubHeader league="premier" />
      <ScorerRank scorers={scorers} competition={competition} />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/PL/scorers",
      {
        headers: {
          "X-Auth-Token": process.env.API_TOKEN,
        },
      }
    );

    const tableData = response.data;

    return {
      props: {
        scorers: tableData.scorers,
        competition: tableData.competition,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        scorers: [],
        competition: {},
      },
    };
  }
};

export default PremierScorer;
