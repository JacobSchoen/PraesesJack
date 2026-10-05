import { Component, inject } from '@angular/core';
import { Player } from '../../components/player/player';
import { Dealer } from '../../components/dealer/dealer';
import { ActivatedRoute, Router } from '@angular/router';
import { BlackjackService } from '../../services/blackjack-service';
import { BlackjackGame, GameStatus } from '../../models/blackjackGame.interface';
import { GameResults } from '../../components/game-results/game-results';

@Component({
  imports: [Player, Dealer, GameResults],
  selector: 'app-game-table',
  styleUrl: './game-table.css',
  templateUrl: './game-table.html',
})
export class GameTable {
  private route = inject(ActivatedRoute);
  private blackjackService = inject(BlackjackService);
  private router = inject(Router);
  private game = this.blackjackService.game;
  private gameId!: number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.gameId = Number(params.get('id'));

    this.blackjackService.getGame(this.gameId).subscribe();
  });
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
    console.log('here', this.gameId)
    this.blackjackService.hit(this.gameId).subscribe();
  }

  public handlePlayerStand(): void {
    this.blackjackService.stand(this.gameId).subscribe();
  }

  public handleNewGame(): void {
    let newGame: BlackjackGame;

    this.blackjackService.createGame().subscribe({
      next: (data) => {
        newGame = data;
        console.log(newGame)
        this.router.navigate(
          ['/gameTable', newGame.gameId],
        );
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
