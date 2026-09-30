using thePit.Models;

namespace thePit.Service;

public class IBlackjackService
{
    Task<BlackjackGame> CreateGame();
    Task<BlackjackGame> getGame(int gameId);

    Task<BlackjackGame> Hit(int gameId);
    Task<BlackjackGame> Stand(int gameId);


}