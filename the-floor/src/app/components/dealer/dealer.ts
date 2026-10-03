import { Component, input } from '@angular/core';
import { PlayingCard } from '../playing-card/playing-card';
import { Card } from '../../models/card.interface';
import { Hand } from '../../models/hand.interface';
import { GameStatus } from '../../models/blackjackGame.interface';

@Component({
  imports: [PlayingCard],
  selector: 'app-dealer',
  styleUrl: './dealer.css',
  templateUrl: './dealer.html',
})
export class Dealer {
  hand = input.required<Hand>();
  status = input.required<string>();

  protected fanAngle(index: number, total: number): number {
    if (total <= 1) return 0;
    const maxStepDeg = 8;
    const step = Math.min(maxStepDeg, 36 / (total - 1));
    return (index - (total - 1) / 2) * step;
  }
}
