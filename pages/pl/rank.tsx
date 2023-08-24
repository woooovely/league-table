import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import Head from "next/head";

const PremierRank = () => {
    return (
        <div>
            <Head>
                <title>23-24 프리미어리그 순위</title>
            </Head>
            <MainHeader />
            <SubHeader league="premier" />
        </div>
    )
}

export default PremierRank;