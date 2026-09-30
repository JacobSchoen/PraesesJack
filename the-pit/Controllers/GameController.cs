using Microsoft.AspNetCore.Mvc;
using thePit.Service;

namespace thePit.Controller;

[ApiController]
public class GameController : ControllerBase
{
    private IBlackjackService _blackjackService;

    public GameController(IBlackjackService blackjackService)
    {
        _blackjackService = blackjackService;
    }

    
}