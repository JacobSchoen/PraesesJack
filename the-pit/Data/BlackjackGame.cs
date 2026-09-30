namespace thePit.Models;

public class BlackjackGame
{
    public int GameId { get; set; }
    public Deck Deck { get; set; } = new(1);
    public Hand Dealer { get; set; } = new();
    public Hand Player { get; set; } = new();
    public string Status { get; set; } = string.Empty;
}