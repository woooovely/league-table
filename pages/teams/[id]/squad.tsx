import MainHeader from "@/components/MainHeader";
import detectLeague from "@/utils/detectLeague";
import { TeamInformation } from "@/types/team-info";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { convertTeamName } from "@/utils/convert";
import TeamDetailCard from "@/components/TeamDetailCard/TeamDetailCard";
import SquadTemplate from "@/components/SquadTemplate/SquadTemplate";

interface Props {
  data: TeamInformation;
}

const TeamSquad = ({ data }: Props) => {
  const league = detectLeague(data)[0].league;

  return (
    <div>
      <Head>
        <title>{convertTeamName(league, data.name)}</title>
      </Head>
      <MainHeader />
      <TeamDetailCard data={data} league={league} />
      <SquadTemplate squad={data.squad} league={league} />
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const teamId = ctx.params?.id;
  const headers = {
    "X-Auth-Token": process.env.API_TOKEN,
  };

  const response = await axios.get(
    `https://api.football-data.org/v4/teams/${teamId}`,
    { headers }
  );

  const data = response.data;

  return {
    props: {
      data,
    },
  };
};

export default TeamSquad;
