import axios from "axios";
import { GetServerSidePropsContext } from "next";

const TeamInfo = () => {
  return <div></div>;
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
        
    }
  }
};

export default TeamInfo;
