import { Component } from '@angular/core';
import { PlayingCard } from '../playing-card/playing-card';
import { Card } from '../../models/card.model';

@Component({
  imports: [PlayingCard],
  selector: 'app-dealer',
  styleUrl: './dealer.css',
  templateUrl: './dealer.html',
})
export class Dealer {
   hand = [{ suit: 'diamonds', value: '10' }, { suit: 'clubs', value: '3' }] as Card[]
    
    protected fanAngle(index: number, total: number): number {
      if (total <= 1) return 0;
      const maxStepDeg = 8;
      const step = Math.min(maxStepDeg, 36 / (total - 1));
      return (index - (total - 1) / 2) * step;
    }
}
