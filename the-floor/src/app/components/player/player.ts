import { Component, input, output } from '@angular/core';
import { PlayingCard } from '../playing-card/playing-card';
import { Hand } from '../../models/hand.interface';
import { GameStatus } from '../../models/blackjackGame.interface';

@Component({
  imports: [PlayingCard],
  selector: 'app-player',
  styleUrl: './player.css',
  templateUrl: './player.html',
})
export class Player {
  hand = input.required<Hand>()
  status = input.required<string>();

  hit = output<void>();
  stand = output<void>();

  protected fanAngle(index: number, total: number): number {
    if (total <= 1) return 0;
    const maxStepDeg = 8;
    const step = Math.min(maxStepDeg, 36 / (total - 1));
    return (index - (total - 1) / 2) * step;
  }


}
