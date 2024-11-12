import { Player } from "@/types/player";
import {
  NameAndTeam,
  PlayerBio,
  PlayerBioStat,
  PlayerCardWrap,
  PlayerName,
  Team,
  Wrapper,
} from "./PlayerCard-style";
import Image from "next/image";
import { nationality } from "@/constants/nationality";
import { playerPosition } from "@/constants/player-position";
import Link from "next/link";

interface Props {
  data: Player;
}

const PlayerCard = ({ data }: Props) => {
  const getAge = (birthDate: string) => {
    const date = new Date();
    const birthYear = birthDate.slice(0, 4);

    return date.getFullYear() - parseInt(birthYear) + 1;
  };

  const playerInfo = [
    { value: `${getAge(data.dateOfBirth)}세`, title: data.dateOfBirth },
    { value: nationality[data.nationality], title: "국적" },
    { value: data.shirtNumber, title: "등번호" },
    { value: playerPosition[data.section], title: "포지션" },
  ];

  return (
    <Wrapper>
      <PlayerCardWrap>
        <NameAndTeam>
          <PlayerName>{data.name}</PlayerName>
          <Link href={`/teams/${data.currentTeam.id}/overview`}>
            <Team>
              <Image
                src={data.currentTeam.crest}
                alt={data.currentTeam.name}
                width={20}
                height={20}
              />
              {data.currentTeam.name}
            </Team>
          </Link>
        </NameAndTeam>
        <PlayerBio>
          {playerInfo.map((v, i) => (
            <PlayerBioStat key={i}>
              {v.value}
              <span>{v.title}</span>
            </PlayerBioStat>
          ))}
        </PlayerBio>
      </PlayerCardWrap>
    </Wrapper>
  );
};

export default PlayerCard;
