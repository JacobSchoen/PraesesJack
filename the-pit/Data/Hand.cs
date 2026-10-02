namespace thePit.Models;

public class Hand
{
    public List<Card> Cards { get; set; } = [];

    public int Score()
    {
        int score = Cards.Sum(card => (int)card.Value);
        
        int aceCount = Cards.Count(card => card.Value == CardRank.Ace);

        while (score > 21 && aceCount > 0)
        {
            score -=10;
            aceCount--;
        }

        return score;
    }

    public void AddCard(Card card)
    {
        Cards.Add(card);
    }
}