using Core.Models;
using Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/products")]
public class ProductController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;
    private readonly Context _context;

    public ProductController(ILogger<ProductController> logger, Context context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public async Task<IEnumerable<Product>> Get([FromQuery] string catId) =>
        await _context.Products.Where(p => p.CatId == catId).ToListAsync();

    [HttpPost]
    public async Task<IActionResult> AddRange([FromBody] Product[] products)
    {
        await _context.Products.AddRangeAsync(products);

        await _context.SaveChangesAsync();

        return Ok();
    }
}