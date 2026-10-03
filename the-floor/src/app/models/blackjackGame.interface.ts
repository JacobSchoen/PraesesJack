import { Hand } from "./hand.interface";

export interface BlackjackGame {
    gameId: number,
    deck: any,
    dealer: Hand,
    player: Hand,
    status: GameStatus
}

export enum GameStatus {
    PlayerTurn,
    DealerTurn,
    PlayerBust,
    DealerBust,
    PlayerWon,
    DealerWon,
    Tie
}