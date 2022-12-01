using Core.Models;
using Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/favorite")]
public class FavoriteController : ControllerBase
{
    private readonly ILogger<FavoriteController> _logger;
    private readonly Context _context;

    public FavoriteController(ILogger<FavoriteController> logger, Context context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public async Task<IEnumerable<Product>> Get() =>
        await _context.Favorites.Select(f => f.Product).ToListAsync();

    [HttpPost("toggle/{productId}")]
    public async Task<IActionResult> Toggle(string productId)
    {
        var product = await _context.Products
            .FindAsync(productId);

        if (product is null)
        {
            return NotFound();
        }

        var favorite = await _context.Favorites
            .Where(c => c.Product.Id == productId)
            .SingleOrDefaultAsync();

        if (favorite is null)
        {
            await _context.Favorites.AddAsync(new Favorite
            {
                Product = product
            });
        }
        else
        {
            _context.Favorites.Remove(favorite);
        }

        await _context.SaveChangesAsync();

        return Ok();
    }
}