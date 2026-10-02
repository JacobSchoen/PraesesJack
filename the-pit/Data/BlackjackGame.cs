namespace thePit.Models;

public class BlackjackGame
{
    public int GameId { get; set; }
    public Deck Deck { get; set; } = new(1);
    public Hand Dealer { get; set; } = new();
    public Hand Player { get; set; } = new();
    public GameStatus Status { get; set; } = GameStatus.PlayerTurn;
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
