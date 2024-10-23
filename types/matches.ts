export interface Matches {
    id: number;
    utcDate: string;
    matchday: number;
    homeTeam: TeamTypes;
    awayTeam: TeamTypes;
    score: Score;
    referees: RefereeInfo[]
    status: string;
}

interface TeamTypes {
    id: number;
    name: string;
    shortName: string;
    crest: string;
}

interface Score {
    winner: string | null;
    fullTime: TimeScore;
    halfTime: TimeScore;
}

interface TimeScore {
    home: number;
    away: number;
}

interface RefereeInfo {
    id: number;
    name: string;
    type: string;
    nationality: string;
}