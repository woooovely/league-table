export interface SeasonProps {
    id: number;
    startDate: string;
    endDate: string;
  }
  
export  interface TeamProps {
    id: number;
    name: string;
    shortName: string;
    crest: string;
  }
  
export interface Team {
    id: number;
    position: number;
    team: TeamProps;
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalDifference: number;
  }
  