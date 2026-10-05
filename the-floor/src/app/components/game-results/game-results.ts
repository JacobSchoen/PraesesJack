import { Component, computed, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { BlackjackGame } from '../../models/blackjackGame.interface';
import { BlackjackService } from '../../services/blackjack-service';

@Component({
  imports: [],
  selector: 'app-game-results',
  styleUrl: './game-results.css',
  templateUrl: './game-results.html',
})
export class GameResults {
  public status = input.required<string>();
  public newGame = output<void>();

  resultStatus = computed(() => this.status() === 'Tie' || this.status() === 'DealerWon' || this.status() === 'DealerBust' || this.status() === 'PlayerBust' || this.status() === 'PlayerWon')
  resultsMessage = computed(() => {
    switch (this.status()) {
      case 'Tie':
        return 'Tie';
      case 'DealerWon':
        return 'Womp Womp Dealer Wins';
      case 'DealerBust':
        return 'Dealer Bust';
      case 'PlayerWon':
        return 'Player Wins!';
      case 'PlayerBust':
        return 'Owch you busted...';
      default:
        return '';
    }
  });

}
