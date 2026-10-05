namespace thePit.Models;

public class BlackjackGame
{
    public int GameId { get; set; }
    public List<Hand> Hands { get; set; } = [];
    public GameStatus Status { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public Hand Player => Hands.First(h => h.Type == HandType.Player);

    public Hand Dealer => Hands.First(h => h.Type == HandType.Dealer);
}

public enum GameStatus
{
    PlayerTurn,
    DealerTurn,
    PlayerBust,
    DealerBust,
    PlayerWon,
    DealerWon,
    Tie
}
