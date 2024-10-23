import MainHeader from "@/components/MainHeader";
import MatchListTemplate from "@/components/MatchListTemplate/MatchListTemplate";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";

const PremierMatches = () => {
  return (
    <div>
      <Head>
        <title>24-25 프리미어리그 경기일정</title>
      </Head>
      <MainHeader />
      <SubHeader league="premier" />
      <MatchListTemplate league="premier" />
    </div>
  );
};

export default PremierMatches;
