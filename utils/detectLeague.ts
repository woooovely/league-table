import { TeamInformation } from "@/types/team-info";

const leagues = [
    "Premier League",
    "Bundesliga",
    "Primera Division",
    "Serie A",
    "Ligue 1",
];

const detectLeague = (data: TeamInformation) => {
    const teamCompetitions = data.runningCompetitions
    .filter((competition) => leagues.includes(competition.name))
    .map((competition) => ({
      name: data.name,
      league: competition.name,
    }));

    return teamCompetitions;
}

export default detectLeague;