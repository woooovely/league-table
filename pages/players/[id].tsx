import MainHeader from "@/components/MainHeader";
import PlayerCard from "@/components/PlayerCard/PlayerCard";
import { Player } from "@/types/player";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

interface Props {
    data: Player;
}

const PlayerDetail = ({ data }: Props) => {
  return (
    <div>
        <Head>
            <title>{data.name}</title>
        </Head>
        <MainHeader />
        <PlayerCard data={data} />
    </div>
  )
};

export default PlayerDetail;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const playerId = ctx.params?.id;
  const headers = {
    "X-Auth-Token": process.env.API_TOKEN,
  };

  const response = await axios.get(
    `https://api.football-data.org/v4/persons/${playerId}`,
    { headers }
  );

  const data = response.data;

  return {
    props: {
        data,
    }
  }
};
