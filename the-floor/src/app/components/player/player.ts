import { Component } from '@angular/core';
import { Card } from '../../models/card.model';
import { PlayingCard } from '../playing-card/playing-card';

@Component({
  imports: [PlayingCard],
  selector: 'app-player',
  styleUrl: './player.css',
  templateUrl: './player.html',
})
export class Player {
  hand = [{ suit: 'diamonds', value: '10' }, { suit: 'clubs', value: '3' }] as Card[]
  
  protected fanAngle(index: number, total: number): number {
    if (total <= 1) return 0;
    const maxStepDeg = 8;
    const step = Math.min(maxStepDeg, 36 / (total - 1));
    return (index - (total - 1) / 2) * step;
  }
}
