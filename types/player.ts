import { TeamInformation } from "./team-info";

export interface Player {
    id: number;
    name: string;
    dateOfBirth: string;
    nationality: string;
    section: string;
    position: string;
    shirtNumber: number;
    currentTeam: TeamInformation;
}

