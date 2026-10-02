using thePit.Models;

namespace thePit.Service;

public class BlackjackService : IBlackjackService
{
    private readonly List<BlackjackGame> _games = [];

    public Task<BlackjackGame> CreateGame()
    {
        var game = new BlackjackGame
        {
            GameId = Random.Shared.Next(1, 1000),
            Status = GameStatus.PlayerTurn
        };

        game.Player.AddCard(game.Deck.Draw());
        game.Dealer.AddCard(game.Deck.Draw());

        game.Player.AddCard(game.Deck.Draw());
        game.Dealer.AddCard(game.Deck.Draw());

        _games.Add(game);

        return Task.FromResult(game);
    }

    public Task<BlackjackGame> GetGame(int gameId)
    {
        var game = _games.FirstOrDefault(g => g.GameId == gameId);

        if (game == null)
        {
            throw new KeyNotFoundException(
                $"Game not found with ${gameId}"
            );
        }

        return Task.FromResult(game);
    }

    public async Task<BlackjackGame> Hit(int gameId)
    {
        var game = await GetGame(gameId);

        if (game.Status != GameStatus.PlayerTurn)
        {
            throw new InvalidOperationException(
                "Not Players Turn");
        }

        game.Player.AddCard(game.Deck.Draw());

        if (game.Player.Score() > 21)
        {
            game.Status = GameStatus.PlayerBust;
        }

        return game;
    }

    public async Task<BlackjackGame> Stand(int gameId)
    {
        var game = await GetGame(gameId);

        game.Status = GameStatus.DealerTurn;

        while (game.Dealer.Score() < 17)
        {
            game.Dealer.AddCard(game.Deck.Draw());
        }

        if (game.Dealer.Score() > 21)
        {
            game.Status = GameStatus.PlayerWon;
        }
        else if ( game.Dealer.Score() > game.Player.Score())
        {
            game.Status = GameStatus.DealerWon; 
        }
        else if (game.Dealer.Score() < game.Player.Score())
        {
            game.Status = GameStatus.PlayerWon;
        }
        else
        {
            game.Status = GameStatus.Tie;
        }

        return game;
    }
}