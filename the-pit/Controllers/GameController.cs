using Microsoft.AspNetCore.Mvc;
using thePit.Models;
using thePit.Service;

namespace thePit.Controller;

[ApiController]
[Route("api/[controller]")]
public class GameController : ControllerBase
{
    private IBlackjackService _blackjackService;

    public GameController(IBlackjackService blackjackService)
    {
        _blackjackService = blackjackService;
    }

    [HttpPost]
    public async Task<ActionResult<BlackjackGame>> CreateGame()
    {
        var game = await _blackjackService.CreateGame();

        if (game == null)
        {
            throw new Exception("Game failed to be created");
        }

        return Ok(game);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<BlackjackGame>> GetGame(int id)
    {
        var game = await _blackjackService.GetGame(id);

        if (game == null)
        {
            return NotFound();
        }

        return Ok(game);
    }

    [HttpGet("{id}/hit")]
    public async Task<ActionResult<BlackjackGame>> Hit(int id)
    {
        var game = await _blackjackService.Hit(id);

        if (game == null)
        {
            return NotFound();
        }

        return Ok(game);

    }

    [HttpGet("{id}/stand")]
    public async Task<ActionResult<BlackjackGame>> Stand(int id)
    {
        var game = await _blackjackService.Stand(id);

        if (game == null)
        {
            return NotFound();
        }

        return Ok(game);
    }


}