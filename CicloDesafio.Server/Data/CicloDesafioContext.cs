using CicloDesafio.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace CicloDesafio.Server.Data;

public class CicloDesafioContext : DbContext
{
    public CicloDesafioContext(DbContextOptions<CicloDesafioContext> opts) : base(opts) {}

    public DbSet<Participante> Participantes { get; set; }
}
