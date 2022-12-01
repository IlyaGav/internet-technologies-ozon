namespace Core.Models;

#pragma warning disable CS8618

public class CartProductItem
{
    public long Id { get; set; }

    public int Count { get; set; }
    
    public Product Product { get; set; }
}


#pragma warning restore CS8618