import { Squad } from "@/types/squad";
import {
  Nationality,
  PlayerDetailTile,
  PlayerName,
  PositionCard,
  SquadTile,
  SquadTilesWrapper,
  Title,
  Wrapper,
} from "./SquadTemplate-style";
import { convertPlayerName, convertTeamName } from "@/utils/convert";
import { plPlayerName } from "@/constants/player-name";
import { nationality } from "@/constants/nationality";

interface Props {
  squad: Squad[];
  league: string;
}

const SquadTemplate = ({ squad, league }: Props) => {
  const goalKeepers = squad.filter((item) =>
    item.position?.includes("Goalkeeper")
  );
  const defenders = squad.filter(
    (item) =>
      item.position?.includes("Defence") || item.position?.includes("Back")
  );
  const midfielders = squad.filter((item) =>
    item.position?.includes("Midfield")
  );
  const forwards = squad.filter(
    (item) =>
      item.position?.includes("Winger") ||
      item.position?.includes("Forward") ||
      item.position?.includes("Offence")
  );

  return (
    <Wrapper>
      <PositionCard>
        <Title>골키퍼</Title>
        <SquadTilesWrapper>
          {goalKeepers.map((item) => (
            <SquadTile href={`/players/${item.id}`} key={item.id}>
              <PlayerDetailTile>
                <PlayerName>{item.name}</PlayerName>
                <Nationality>{nationality[item.nationality]}</Nationality>
              </PlayerDetailTile>
            </SquadTile>
          ))}
        </SquadTilesWrapper>
      </PositionCard>
      <PositionCard>
        <Title>수비수</Title>
        <SquadTilesWrapper>
          {defenders.map((item) => (
            <SquadTile href={`/players/${item.id}`} key={item.id}>
              <PlayerDetailTile>
                <PlayerName>{item.name}</PlayerName>
                <Nationality>{nationality[item.nationality]}</Nationality>
              </PlayerDetailTile>
            </SquadTile>
          ))}
        </SquadTilesWrapper>
      </PositionCard>
      <PositionCard>
        <Title>미드필더</Title>
        <SquadTilesWrapper>
          {midfielders.map((item) => (
            <SquadTile href={`/players/${item.id}`} key={item.id}>
              <PlayerDetailTile>
                <PlayerName>{item.name}</PlayerName>
                <Nationality>{nationality[item.nationality]}</Nationality>
              </PlayerDetailTile>
            </SquadTile>
          ))}
        </SquadTilesWrapper>
      </PositionCard>
      <PositionCard>
        <Title>공격수</Title>
        <SquadTilesWrapper>
          {forwards.map((item) => (
            <SquadTile href={`/players/${item.id}`} key={item.id}>
              <PlayerDetailTile>
                <PlayerName>{item.name}</PlayerName>
                <Nationality>{nationality[item.nationality]}</Nationality>
              </PlayerDetailTile>
            </SquadTile>
          ))}
        </SquadTilesWrapper>
      </PositionCard>
    </Wrapper>
  );
};

export default SquadTemplate;
