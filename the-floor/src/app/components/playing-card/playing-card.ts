import { Component, input } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  imports: [],
  selector: 'app-playing-card',
  styleUrl: './playing-card.css',
  templateUrl: './playing-card.html',
})
export class PlayingCard {
  card = input.required<Card>();

   get suitSymbol(): string {
    switch (this.card().suit) {
      case 'hearts':
        return '♥';
      case 'diamonds':
        return '♦';
      case 'clubs':
        return '♣';
      case 'spades':
        return '♠';
    }
  }
  
}
