using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Data;

public class DbContextFactory : IDesignTimeDbContextFactory<Context>
{
    public Context CreateDbContext(string[] args)
    {
        var connectionString = GetConnectionString();

        var builder = new DbContextOptionsBuilder<Context>();
        builder.UseNpgsql(connectionString);

        return new Context(builder.Options);
    }

    private string GetConnectionString()
    {
        var configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .Build();

        return configuration.GetConnectionString("Context");
        
    }
}