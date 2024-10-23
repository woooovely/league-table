export interface Matches {
    utcDate: string;
    matchday: number;
    homeTeam: TeamTypes;
    awayTeam: TeamTypes;
    score: Score;
    referees: RefereeInfo[]
}

interface TeamTypes {
    id: number;
    name: string;
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