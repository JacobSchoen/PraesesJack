namespace thePit.Models;
using System.Text.Json.Serialization;

public class Hand
{
    public int Id { get; set; }

    public int GameId { get; set; }

    [JsonIgnore]
    public BlackjackGame Game { get; set; } = null!;

    public HandType Type { get; set; }

    public List<Card> Cards { get; set; } = [];

    public int Score => CalculateScore();

    private int CalculateScore()
    {
        int score = Cards.Sum(card => (int)card.Value);

        int aceCount = Cards.Count(card => card.Value == CardRank.Ace);

        while (score > 21 && aceCount > 0)
        {
            score -= 10;
            aceCount--;
        }

        return score;
    }

    public void AddCard(Card card)
    {
        Cards.Add(card);
    }
}

public enum HandType
{
    Player,
    Dealer
}