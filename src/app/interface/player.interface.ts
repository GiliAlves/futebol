export interface Player {
    id: string;
    name: string;
    position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';
    skills: {
        dribble: number;
        shot: number;
        marking: number;
        stamina: number;
    };
    totalScore?: number;
}