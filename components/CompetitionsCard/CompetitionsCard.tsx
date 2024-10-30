import { TeamInformation } from "@/types/team-info";
import { CompetitionsContainer, Wrapper } from "./CompetitionsCard-style";
import Competitions from "../Competitions/Competitions";

interface Props {
  data: TeamInformation;
}

const CompetitionsCard = ({ data }: Props) => {
  return (
    <Wrapper>
      <CompetitionsContainer>
        {data.runningCompetitions.map((item, index) => (
          <Competitions key={index} image={item.emblem} code={item.code} />
        ))}
      </CompetitionsContainer>
    </Wrapper>
  );
};

export default CompetitionsCard;
