import { Area } from "./area";
import { Coach } from "./coach";
import { Competition } from "./competition";
import { Squad } from "./squad";

export interface TeamInformation {
    area: Area;
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    runningCompetitions: Competition[];
    coach: Coach;
    squad: Squad[];
}