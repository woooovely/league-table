import { TeamInformation } from "@/types/team-info";
import {
  NavContainer,
  NavMenu,
  TeamCard,
  TeamContainer,
  TeamLogoContainer,
  TeamName,
  Wrapper,
} from "./TeamDetailCard-style";
import Image from "next/image";
import { convertTeamName } from "@/utils/convert";
import { useRouter } from "next/router";

interface Props {
  data: TeamInformation;
  league: string;
}

const navData = [
  {
    name: "팀 개요",
    path: "overview",
  },
  {
    name: "소속 리그/컵",
    path: "competitions",
  },
  {
    name: "감독",
    path: "coach",
  },
  {
    name: "스쿼드",
    path: "squad",
  },
];

const TeamDetailCard = ({ data, league }: Props) => {
  const router = useRouter();

  return (
    <Wrapper>
      <TeamCard>
        <TeamContainer>
          <TeamLogoContainer>
            <Image src={data.crest} alt={data.name} width={42} height={42} />
          </TeamLogoContainer>
          <TeamName>{convertTeamName(league, data.name)}</TeamName>
        </TeamContainer>
        <NavContainer>
          {navData.map((item, index) => (
            <NavMenu
              key={index}
              href={`/teams/${data.id}/${item.path}`}
              isActive={router.asPath.includes(item.path)}
            >
              {item.name}
            </NavMenu>
          ))}
        </NavContainer>
      </TeamCard>
    </Wrapper>
  );
};

export default TeamDetailCard;
