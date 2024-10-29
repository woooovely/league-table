import { TeamInformation } from "@/types/team-info";
import {
  TeamOverviewContainer,
  NameAndCity,
  TeamVenue,
  TeamVenueHeader,
  TeamVenueLocation,
  VenueLocation,
  VenueName,
  Wrapper,
  TeamColorContainer,
  TeamColor,
  TeamColorHeader,
  TeamColorDetail,
  Color,
} from "./TeamOverview-style";

interface Props {
  data: TeamInformation;
}

const TeamOverview = ({ data }: Props) => {
  return (
    <Wrapper>
      <TeamOverviewContainer>
        <TeamVenue>
          <TeamVenueHeader>경기장</TeamVenueHeader>
          <TeamVenueLocation>
            <NameAndCity>
              <VenueName>{data.venue}</VenueName>
              <VenueLocation>{data.address}</VenueLocation>
            </NameAndCity>
          </TeamVenueLocation>
        </TeamVenue>
      </TeamOverviewContainer>
      <TeamColorContainer>
        <TeamColor>
          <TeamColorHeader>클럽 컬러</TeamColorHeader>
          <TeamColorDetail>
            <Color>{data.clubColors}</Color>
          </TeamColorDetail>
        </TeamColor>
      </TeamColorContainer>
    </Wrapper>
  );
};

export default TeamOverview;
