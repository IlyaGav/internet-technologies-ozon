using Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Data;

#pragma warning disable CS8618

public class Context: DbContext
{
    public DbSet<Product> Products { get; set; }
    
    public DbSet<Category> Categories { get; set; }
    
    public DbSet<CartProductItem> Cart { get; set; }
    
    public DbSet<Favorite> Favorites { get; set; }

    public Context(DbContextOptions<Context> options) : base(options)
    {
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>(builder =>
        {
            builder.HasKey(p => p.Id);
            
            builder.HasOne<Category>()
                .WithMany()
                .HasForeignKey(p => p.CatId);

            builder.HasIndex(p => p.Name);


        });
        
        modelBuilder.Entity<Category>(builder =>
        {
            builder.HasKey(c => c.Id);

            builder.HasIndex(c => c.Name);
        });
        
        modelBuilder.Entity<CartProductItem>(builder =>
        {
            builder.HasKey(p => p.Id);
        });

        modelBuilder.Entity<Favorite>(builder =>
        {
            builder.HasKey(p => p.Id);
        });
        
        base.OnModelCreating(modelBuilder);
    }
}

#pragma warning restore CS8618
