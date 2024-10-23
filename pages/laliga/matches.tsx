import MainHeader from "@/components/MainHeader";
import MatchListTemplate from "@/components/MatchListTemplate/MatchListTemplate";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";

const BundesMatches = () => {
    return (
        <div>
            <Head>
                <title>24-25 라리가 경기일정</title>
            </Head>
            <MainHeader />
            <SubHeader league="laliga" />
            <MatchListTemplate league="laliga" />
        </div>
    )
}

export default BundesMatches;