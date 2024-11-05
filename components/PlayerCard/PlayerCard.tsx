import { Player } from "@/types/player";
import {
  BioAndPosition,
  BioContainer,
  NameAndTeam,
  PlayerBio,
  PlayerBioStat,
  PlayerBioStatTitle,
  PlayerBioStatValue,
  PlayerHead,
  PlayerHeader,
  PlayerName,
  Team,
  TeamLink,
  Wrapper,
} from "./PlayerCard-style";
import Image from "next/image";
import { nationality } from "@/constants/nationality";

interface Props {
  data: Player;
}

const PlayerCard = ({ data }: Props) => {
  const getAge = (birthDate: string) => {
    const date = new Date();
    const birthYear = birthDate.slice(0, 4);

    return date.getFullYear() - parseInt(birthYear) + 1;
  };

  return (
    <Wrapper>
      <PlayerHeader>
        <PlayerHead>
          <NameAndTeam>
            <PlayerName>{data.name}</PlayerName>
            <TeamLink href={`/teams/${data.currentTeam.id}/overview`}>
              <Team>
                <Image
                  src={data.currentTeam.crest}
                  alt={data.currentTeam.name}
                  width={20}
                  height={20}
                />
                {data.currentTeam.name}
              </Team>
            </TeamLink>
          </NameAndTeam>
        </PlayerHead>
        <BioAndPosition>
          <BioContainer>
            <PlayerBio>
              <PlayerBioStat>
                <PlayerBioStatValue>{`${getAge(
                  data.dateOfBirth
                )}세`}</PlayerBioStatValue>
                <PlayerBioStatTitle>
                  <span>{data.dateOfBirth}</span>
                </PlayerBioStatTitle>
              </PlayerBioStat>
              <PlayerBioStat>
                <PlayerBioStatValue>
                  {nationality[data.nationality]}
                </PlayerBioStatValue>
                <PlayerBioStatTitle>
                  <span>국적</span>
                </PlayerBioStatTitle>
              </PlayerBioStat>
              <PlayerBioStat>
                <PlayerBioStatValue>{data.shirtNumber}</PlayerBioStatValue>
                <PlayerBioStatTitle>
                  <span>등번호</span>
                </PlayerBioStatTitle>
              </PlayerBioStat>
            </PlayerBio>
          </BioContainer>
        </BioAndPosition>
      </PlayerHeader>
    </Wrapper>
  );
};

export default PlayerCard;
