import { bundesPlayerName, bundesTeamName, championsPlayerName, championsTeamName, laligaPlayerName, laligaTeamName, leaguePlayerName, leagueTeamName, plPlayerName, plTeamsName, seriePlayerName, serieTeamName } from "@/constants/constants"

export const convertTeamName = (league: string, teamName: string) => {
    switch (league) {
        case 'Premier League':
            return plTeamsName[teamName];

        case 'Bundesliga':
            return bundesTeamName[teamName];

        case 'Primera Division':
            return laligaTeamName[teamName];

        case 'Serie A':
            return serieTeamName[teamName];

        case 'Ligue 1':
            return leagueTeamName[teamName];

        default:
            return championsTeamName[teamName];
    }
}

export const convertPlayerName = (league: string, player: string) => {
    switch (league) {
        case 'Premier League':
            return plPlayerName[player];

        case 'Bundesliga':
            return bundesPlayerName[player];

        case 'Primera Division':
            return laligaPlayerName[player];

        case 'Serie A':
            return seriePlayerName[player];

        case 'Ligue 1':
            return leaguePlayerName[player];

        default:
            return championsPlayerName[player];
    }
};