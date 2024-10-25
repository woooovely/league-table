import Head from "next/head";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import * as S from "@/styles/serie/scorer";
import {
  nationality,
  seriePlayerName,
  serieTeamName,
} from "@/constants/constants";
import { CompetitionProps, Scorer } from "@/types/scorer-type";
import ScorerRank from "@/components/ScorerRank/ScorerRank";

interface ScorerProps {
  scorers: Scorer[];
  competition: CompetitionProps;
}

const SerieScorer = ({ scorers, competition }: ScorerProps) => {
  return (
    <div>
      <Head>
        <title>23-24 세리에A 득점왕</title>
      </Head>
      <MainHeader />
      <SubHeader league="serie" />
      <ScorerRank scorers={scorers} competition={competition} />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/SA/scorers",
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

export default SerieScorer;
