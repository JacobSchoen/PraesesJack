using Microsoft.AspNetCore.Mvc.TagHelpers;

namespace thePit.Models;

public class Deck
{
    public List<Card> Cards { get; set; } = [];

    public Deck(int shoeNumber, IEnumerable<Card> dealtCards)
    {
        CreateDeck(shoeNumber);

        foreach (var dealtCard in dealtCards)
        {
            var card = Cards.First(c =>
                c.Value == dealtCard.Value &&
                c.Suit == dealtCard.Suit);

            Cards.Remove(card);
        }
        
        Shuffle();
    }

    public void CreateDeck(int shoeNumber)
    {
        foreach (CardSuit suit in Enum.GetValues<CardSuit>())
        {
            foreach (CardRank value in Enum.GetValues<CardRank>())
            {
                Cards.Add(new Card
                {
                    Suit = suit,
                    Value = value
                });
            }
        }

    }

    //Fisher-Yates shuffle algorithm is what google said is best and most efficient
    public void Shuffle()
    {
        for (int i = Cards.Count - 1; i > 0; i--)
        {
            int j = Random.Shared.Next(i + 1);

            (Cards[i], Cards[j]) = (Cards[j], Cards[i]);
        }
    }

    public Card Draw()
    {
        if (Cards.Count == 0)
        {
            throw new InvalidOperationException("Deck is empty!");
        }

        Card card = Cards[0];
        Cards.RemoveAt(0);

        return card;
    }


}