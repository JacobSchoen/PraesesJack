import { Component, inject } from '@angular/core';
import { Player } from '../../components/player/player';
import { Dealer } from '../../components/dealer/dealer';
import { ActivatedRoute } from '@angular/router';
import { BlackjackService } from '../../services/blackjack-service';
import { GameStatus } from '../../models/blackjackGame.interface';

@Component({
  imports: [Player, Dealer],
  selector: 'app-game-table',
  styleUrl: './game-table.css',
  templateUrl: './game-table.html',
})
export class GameTable {
  private route = inject(ActivatedRoute);
  private blackjackService = inject(BlackjackService);

  game = this.blackjackService.game;

  gameId: number;


  constructor() {
    this.gameId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.blackjackService.getGame(this.gameId).subscribe();
  }


  private readonly gameStatuses: Record<GameStatus, string> = {
    [GameStatus.PlayerBust]: 'PlayerBust',
    [GameStatus.PlayerTurn]: 'PlayerTurn',
    [GameStatus.PlayerWon]: 'PlayerWon',
    [GameStatus.DealerBust]: 'DealerBust',
    [GameStatus.DealerTurn]: 'DealerTurn',
    [GameStatus.DealerWon]: 'DealerWon',
    [GameStatus.Tie]: 'Tie',
  };

  get gameStatus(): string {
    return this.gameStatuses[this.game()!.status];
  }

  public handlePlayerHit(): void {
    console.log('hit')
    this.blackjackService.hit(this.gameId).subscribe();
  }

  public handlePlayerStand(): void {
    this.blackjackService.stand(this.gameId).subscribe();
  }
}
