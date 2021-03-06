
export enum GameStatus {
    NEW = 'new',
    ONGOING = 'ongoing',
    FINISHED = 'finished',
    ABANDONED = 'abandoned',
}


export class Game {
    id: Number;
    name: String;
    status: String;
    nPlayers: Object;
    createdOn: Date;
    lastActive: Date;
    rounds: Object[];
    scoreboard: Object[];


    constructor(info) {
        this.id = info.id;
        this.name = info.name;
        this.status = info.status;
        this.nPlayers = info.n_players;
        this.createdOn = new Date(info.created_on);
        this.lastActive = new Date(info.last_active);
        this.rounds = info.rounds;
        this.scoreboard = info.scoreboard;
    }

    isPlayable() {
        return this.status === GameStatus.NEW;
    }
}
