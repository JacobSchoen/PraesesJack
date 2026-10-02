using thePit.Models;

namespace thePit.Service;

public interface IBlackjackService
{
    Task<BlackjackGame> CreateGame();
    Task<BlackjackGame> GetGame(int gameId);

    Task<BlackjackGame> Hit(int gameId);
    Task<BlackjackGame> Stand(int gameId);


}