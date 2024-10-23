import MainHeader from "@/components/MainHeader";
import MatchListTemplate from "@/components/MatchListTemplate/MatchListTemplate";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";

const BundesMatches = () => {
  return (
    <div>
      <Head>
        <title>24-25 리그1 경기일정</title>
      </Head>
      <MainHeader />
      <SubHeader league="league" />
      <MatchListTemplate league="league" />
    </div>
  );
};

export default BundesMatches;
