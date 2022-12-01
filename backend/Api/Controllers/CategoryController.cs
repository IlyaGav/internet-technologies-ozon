using Core.Models;
using Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/categories")]
public class CategoryController : ControllerBase
{
    private readonly ILogger<CategoryController> _logger;
    private readonly Context _context;

    public CategoryController(ILogger<CategoryController> logger, Context context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public async Task<IEnumerable<Category>> Get() =>
        await _context.Categories.ToListAsync();

    [HttpPost]
    public async Task<IActionResult> AddRange([FromBody] Category[] categories)
    {
        await _context.Categories.AddRangeAsync(categories);

        await _context.SaveChangesAsync();

        return Ok();
    }
}