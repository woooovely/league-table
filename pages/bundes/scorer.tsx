import Head from "next/head";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import * as S from '@/styles/bundes/scorer';
import { bundesPlayerName, bundesTeamName, nationality } from "@/constants/constants";

interface CompetitionProps {
    id: number;
    name: string;
    code: string;
    emblem: string;
  }
  
  interface Scorer {
    player: {
      id: number;
      name: string;
      nationality: string;
    };
    team: {
      id: number;
      name: string;
      crest: string;
      website: string;
    };
    goals: number;
  }
  
  interface ScorerDataProps {
    scorers: Scorer[];
    competition: CompetitionProps;
  }
  

const BundesScorer = ({ scorers, competition }: ScorerDataProps) => {
    return (
        <div>
            <Head>
                <title>23-24 분데스리가 득점왕</title>
            </Head>
            <MainHeader />
            <SubHeader league="bundes" />
            <S.LogoContainer>
                <img src={competition.emblem} alt="리그 로고" />
            </S.LogoContainer>
            <S.BoxContainer>
                <S.TableTitle>
                    <S.Lists>순위</S.Lists>
                    <S.Lists>선수명</S.Lists>
                    <S.Lists>득점</S.Lists>
                    <S.Lists>소속팀</S.Lists>
                    <S.Lists>국적</S.Lists>
                </S.TableTitle>
                {scorers.map((item: Scorer, index: number) => (
                    <S.Container key={item.player.id}>
                        <S.Table>
                            <S.Rank>{index + 1}</S.Rank>
                            <S.Player>{bundesPlayerName[item.player.name]}</S.Player>
                            <S.Goals>{item.goals}</S.Goals>
                            <S.TeamContainer>
                                <S.TeamLogo src={item.team.crest} alt="팀 로고" />
                                {bundesTeamName[item.team.name]}
                            </S.TeamContainer>
                            <S.Nation>{nationality[item.player.nationality]}</S.Nation>
                        </S.Table>
                    </S.Container>
                ))}
            </S.BoxContainer>
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/bundes/scorer", {
            headers: {
                "X-Auth-Token": process.env.API_TOKEN
            }
        })

        const tableData = response.data;

        return {
            props: {
                scorers: tableData.scorers,
                competition: tableData.competition
            }
        }
    } catch (error) {
        console.error(error);

        return {
            props: {
                scorers: [],
                competition: {}
            }
        }
    }
}

export default BundesScorer;