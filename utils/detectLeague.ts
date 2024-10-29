import { TeamInformation } from "@/types/team-info";

const leagues = [
    "PL",
    "BL1",
    "PD",
    "SA",
    "FL1",
    "CL"
];

const detectLeague = (data: TeamInformation) => {
    const teamCompetitions = data.runningCompetitions
    .filter((competition) => leagues.includes(competition.code))
    .map((competition) => ({
      name: data.name,
      league: competition.name,
    }));

    return teamCompetitions;
}

export default detectLeague;