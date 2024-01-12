using CicloDesafio.Server.Models;
using System.ComponentModel.DataAnnotations;

namespace CicloDesafio.Server.Data.Dtos;

public class ReadParticipanteDto
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string Telefone { get; set; }
    public string Cidade { get; set; }
    public Genero Genero { get; set; }
    public string CPF { get; set; }
    public Modalidade Modalidade { get; set; }
}
