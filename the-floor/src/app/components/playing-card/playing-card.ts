import { Component, input } from '@angular/core';
import { Card, CardSuit } from '../../models/card.interface';

@Component({
  imports: [],
  selector: 'app-playing-card',
  styleUrl: './playing-card.css',
  templateUrl: './playing-card.html',
})
export class PlayingCard {
  public card = input.required<Card>();
  public hidden = input<boolean>(false);

  private readonly suitSymbols: Record<CardSuit, string> = {
  [CardSuit.Hearts]: '♥',
  [CardSuit.Diamonds]: '♦',
  [CardSuit.Spades]: '♠',
  [CardSuit.Clubs]: '♣'
};

get suitSymbol(): string {
  return this.suitSymbols[this.card().suit];
}

}
