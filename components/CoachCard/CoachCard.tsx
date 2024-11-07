import { TeamInformation } from "@/types/team-info";
import {
  CoachContainer,
  CoachDetail,
  CoachHeader,
  CoachName,
  Nationality,
  Period,
  Wrapper,
} from "./CoachCard-style";
import { coachName } from "@/constants/coach-name";
import { nationality } from "@/constants/nationality";
import { Coach } from "@/types/coach";

interface Props {
  data: Coach;
}

const CoachCard = ({ data }: Props) => {
  return (
    <Wrapper>
      <CoachContainer>
        <CoachHeader>감독</CoachHeader>
        <CoachDetail>
          <CoachName>{coachName[data.name]}</CoachName>
          <span>{nationality[data.nationality]}</span>
          <span>{`${data.contract.start} ~ ${data.contract.until}`}</span>
        </CoachDetail>
      </CoachContainer>
    </Wrapper>
  );
};

export default CoachCard;
