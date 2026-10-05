using Microsoft.EntityFrameworkCore;
using thePit.Data;
using thePit.Models;

namespace thePit.Service;

public class BlackjackService : IBlackjackService
{
    private readonly GameDbContext _dbContext;

    public BlackjackService(GameDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<BlackjackGame> CreateGame()
    {
        var game = new BlackjackGame
        {
            Status = GameStatus.PlayerTurn,

            Hands =
            [
                new Hand
                {
                    Type = HandType.Player
                },

                new Hand
                {
                    Type = HandType.Dealer
                }
            ]
        };

        var deck = new Deck(1, []);

        game.Player.AddCard(deck.Draw());
        game.Dealer.AddCard(deck.Draw());

        game.Player.AddCard(deck.Draw());
        game.Dealer.AddCard(deck.Draw());

        _dbContext.Games.Add(game);

        await _dbContext.SaveChangesAsync();

        return game;
    }

    public async Task<BlackjackGame> GetGame(int gameId)
    {
        var game = await _dbContext.Games
            .Include(g => g.Hands)
            .ThenInclude(h => h.Cards)
            .FirstOrDefaultAsync(g => g.GameId == gameId);

        if (game == null)
        {
            throw new KeyNotFoundException(
                $"Game not found with {gameId}"
            );
        }

        return game;
    }

    public async Task<BlackjackGame> Hit(int gameId)
    {
        var game = await GetGame(gameId);

        if (game.Status != GameStatus.PlayerTurn)
        {
            throw new InvalidOperationException(
                "Not Players Turn");
        }

        var deck = CreateRemainingDeck(game);

        game.Player.AddCard(deck.Draw());

        if (game.Player.Score > 21)
        {
            game.Status = GameStatus.PlayerBust;
        }

        await _dbContext.SaveChangesAsync();

        return game;
    }

    public async Task<BlackjackGame> Stand(int gameId)
    {
        var game = await GetGame(gameId);

        game.Status = GameStatus.DealerTurn;

        var deck = CreateRemainingDeck(game);

        while (game.Dealer.Score < 17)
        {
            game.Dealer.AddCard(deck.Draw());
        }

        if (game.Dealer.Score > 21)
        {
            game.Status = GameStatus.PlayerWon;
        }
        else if (game.Dealer.Score > game.Player.Score)
        {
            game.Status = GameStatus.DealerWon;
        }
        else if (game.Dealer.Score < game.Player.Score)
        {
            game.Status = GameStatus.PlayerWon;
        }
        else
        {
            game.Status = GameStatus.Tie;
        }

        await _dbContext.SaveChangesAsync();

        return game;
    }

    private Deck CreateRemainingDeck(BlackjackGame game)
    {
        var dealtCards = game.Player.Cards
            .Concat(game.Dealer.Cards)
            .ToList();

        return new Deck(1, dealtCards);
    }
}