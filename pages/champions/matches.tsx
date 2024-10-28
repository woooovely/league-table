import MainHeader from "@/components/MainHeader";
import MatchListTemplate from "@/components/MatchListTemplate/MatchListTemplate";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";

const ChampionsMatches = () => {
  return (
    <div>
      <Head>
        <title>24-25 챔피언스리그 경기 일정</title>
      </Head>
      <MainHeader />
      <SubHeader league="champions" />
      <MatchListTemplate league="champions" />
    </div>
  );
};

export default ChampionsMatches;
