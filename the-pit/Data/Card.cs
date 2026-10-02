namespace thePit.Models;

public class Card
{
    public CardRank Value { get; set; }
    public CardSuit Suit { get; set; }
}

public enum CardSuit
{
    Hearts,
    Diamonds,
    Clubs,
    Spades
}

public enum CardRank
{
    Ace = 11,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 10,
    Queen =10,
    King = 10,
}