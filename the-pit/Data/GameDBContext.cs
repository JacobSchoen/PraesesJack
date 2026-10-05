namespace thePit.Data;

using Microsoft.EntityFrameworkCore;
using thePit.Models;

public class GameDbContext : DbContext
{
    public GameDbContext(DbContextOptions<GameDbContext> options)
        : base(options)
    {
    }

    public DbSet<BlackjackGame> Games { get; set; }
    public DbSet<Hand> Hands { get; set; }
    public DbSet<Card> Cards { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BlackjackGame>()
            .HasKey(g => g.GameId);

        modelBuilder.Entity<Hand>()
            .HasOne(h => h.Game)
            .WithMany(g => g.Hands)
            .HasForeignKey(h => h.GameId);

        modelBuilder.Entity<Card>()
            .HasOne(c => c.Hand)
            .WithMany(h => h.Cards)
            .HasForeignKey(c => c.HandId);
    }
}