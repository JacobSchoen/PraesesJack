export interface Card {
    suit: CardSuit;
    value: CardValue;
}

export type CardSuit = 'hearts' | 'diamonds' | 'spades' | 'clubs';

export type CardValue =
    'A' |
    '2' |
    '3' |
    '4' |
    '5' |
    '6' |
    '7' |
    '8' |
    '9' |
    '10' |
    'J' |
    'Q' |
    'K';