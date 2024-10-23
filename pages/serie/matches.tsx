import MainHeader from "@/components/MainHeader";
import MatchListTemplate from "@/components/MatchListTemplate/MatchListTemplate";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";

const BundesMatches = () => {
    return (
        <div>
            <Head>
                <title>24-25 세리에A 경기일정</title>
            </Head>
            <MainHeader />
            <SubHeader league="serie" />
            <MatchListTemplate league="serie" />
        </div>
    )
}

export default BundesMatches;