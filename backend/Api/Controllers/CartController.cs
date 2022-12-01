using Core.Models;
using Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/cart")]
public class CartController : ControllerBase
{
    private readonly ILogger<CartController> _logger;
    private readonly Context _context;

    public CartController(ILogger<CartController> logger, Context context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CartProductItem>>> Get() =>
        await _context.Cart.Include(c => c.Product)
            .ToListAsync();

    [HttpPost("{productId}")]
    public async Task<IActionResult> Add([FromRoute] string productId)
    {
        var product = await _context.Products
            .FindAsync(productId);

        if (product is null)
        {
            return NotFound();
        }

        var cartProduct = await _context.Cart
            .Where(c => c.Product.Id == productId)
            .SingleOrDefaultAsync();

        if (cartProduct is null)
        {
            await _context.Cart.AddAsync(new CartProductItem
            {
                Count = 1,
                Product = product
            });
        }
        else
        {
            ++cartProduct.Count;
        }

        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpDelete("{productId}")]
    public async Task<IActionResult> Remove([FromRoute] string productId, [FromQuery] bool all = false)
    {
        var product = await _context.Products
            .FindAsync(productId);

        if (product is null)
        {
            return NotFound();
        }

        var cartProduct = await _context.Cart
            .Where(c => c.Product.Id == productId)
            .SingleOrDefaultAsync();

        if (cartProduct is null)
        {
            return NotFound();
        }

        if (all || cartProduct.Count == 1)
        {
            _context.Cart.Remove(cartProduct);
        }
        else
        {
            --cartProduct.Count;
        }

        await _context.SaveChangesAsync();

        return Ok();
    }
}