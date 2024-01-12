using System.ComponentModel.DataAnnotations;

namespace CicloDesafio.Server.Models;

public enum Genero
{
    Feminino,
    Masculino,
    [Display(Name = "Não Binário")]
    NaoBinario,
    Outros
}

public enum Modalidade
{
    [Display(Name = "Corrida de Bicicleta")]
    CorridaBicicleta,
    [Display(Name = "Corrida a Pé")]
    CorridaAPe
}

public class Participante
{
    [Key]
    [Required(ErrorMessage = "Obrigatório")]
    public Guid Id { get; set; }
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
