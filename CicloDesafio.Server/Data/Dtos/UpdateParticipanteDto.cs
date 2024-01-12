using CicloDesafio.Server.Models;
using System.ComponentModel.DataAnnotations;

namespace CicloDesafio.Server.Data.Dtos;

public class UpdateParticipanteDto
{
    [Required(ErrorMessage = "Obrigatório")]
    public string Nome { get; set; }
    [Required(ErrorMessage = "Obrigatório")]
    public string Telefone { get; set; }
    [Required(ErrorMessage = "Obrigatório")]
    public string Cidade { get; set; }
    [Required(ErrorMessage = "Obrigatório")]
    public Genero Genero { get; set; }
    [Required(ErrorMessage = "Obrigatório")]
    public string CPF { get; set; }
    [Required(ErrorMessage = "Obrigatório")]
    public Modalidade Modalidade { get; set; }
}
