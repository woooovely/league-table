export interface Scorer {
    player: Player;
    team: TeamInfo;
    goals: number;
    playedMatches: number;
}

export interface Player {
    id: number;
    name: string;
    nationality: string;
}

export interface TeamInfo {
    id: number;
    name: string;
    crest: string;
    website: string;
}