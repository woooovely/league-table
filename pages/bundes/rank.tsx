import Head from "next/head";
import axios from "axios";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import * as S from '@/styles/bundes/rank';
import { bundesTeamName } from "@/constants/constants";

interface CompetitionProps {
    id: number;
    name: string;
    code: string;
    emblem: string;
}

interface SeasonProps {
    id: number;
    startDate: string;
    endDate: string;
}

interface TeamProps {
    id: number;
    name: string;
    shortName: string;
    crest: string;
}

interface Team {
    id: number;
    competition: CompetitionProps;
    team: TeamProps;
    position: number;
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalDifference: number;
}

interface TableDataProps {
    table: Team[];
    competition: CompetitionProps;
    season: SeasonProps;
}

const BundesRank = ({ table, competition, season }: TableDataProps) => {
    return (
        <div>
            <Head>
                <title>23-24 분데스리가 순위</title>
            </Head>
            <MainHeader />
            <SubHeader league="bundes" />
            <S.LogoContainer>
                <img src={competition.emblem} alt="리그 로고" />
            </S.LogoContainer>
            <S.Date>{season.startDate} ~ {season.endDate}</S.Date>
            <S.Table>
                <S.Head>
                    <S.TableTr>
                        <S.TableTh>순위</S.TableTh>
                        <S.TableTh>클럽</S.TableTh>
                        <S.TableTh>경기수</S.TableTh>
                        <S.TableTh>승</S.TableTh>
                        <S.TableTh>무</S.TableTh>
                        <S.TableTh>패</S.TableTh>
                        <S.TableTh>득실차</S.TableTh>
                        <S.TableTh>승점</S.TableTh>
                    </S.TableTr>
                </S.Head>
                <S.Body>
                    {table.map((item: Team) => (
                        <S.ListTr key={item.id}>
                            <S.ListTd>
                                <S.Rank>{item.position}</S.Rank>
                            </S.ListTd>
                            <S.ListTd>
                                <S.TeamLogo src={item.team.crest} alt="팀 로고" />
                                <S.TeamName>{bundesTeamName[item.team.name]}</S.TeamName>
                            </S.ListTd>
                            <S.ListTd>{item.playedGames}</S.ListTd>
                            <S.ListTd>{item.won}</S.ListTd>
                            <S.ListTd>{item.draw}</S.ListTd>
                            <S.ListTd>{item.lost}</S.ListTd>
                            <S.ListTd>{item.goalDifference}</S.ListTd>
                            <S.ListTd>{item.points}</S.ListTd>
                        </S.ListTr>
                    ))}
                </S.Body>
            </S.Table>
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/bundes/rank", {
            headers: {
                "X-Auth-Token": process.env.API_TOKEN
            }
        })

        const tableData = response.data;

        return {
            props: {
                table: tableData.standings[0].table,
                competition: tableData.competition,
                season: tableData.season,
            }
        }
    } catch (error) {
        console.error(error);

        return {
            props: {
                table: [],
                competition: {},
                season: {}
            }
        }
    }
}

export default BundesRank;