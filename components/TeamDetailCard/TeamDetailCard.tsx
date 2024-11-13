import { TeamInformation } from "@/types/team-info";
import {
  Country,
  NameAndCountry,
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
import { nationality } from "@/constants/nationality";
import { navData } from "@/data/navigation-data";

interface Props {
  data: TeamInformation;
  league: string;
}

const TeamDetailCard = ({ data, league }: Props) => {
  const router = useRouter();

  return (
    <Wrapper>
      <TeamCard>
        <TeamContainer>
          <TeamLogoContainer>
            <Image src={data.crest} alt={data.name} width={42} height={42} />
          </TeamLogoContainer>
          <NameAndCountry>
            <TeamName>{convertTeamName(league, data.name)}</TeamName>
            <Country>{nationality[data.area.name]}</Country>
          </NameAndCountry>
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
