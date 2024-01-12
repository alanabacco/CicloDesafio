using AutoMapper;
using CicloDesafio.Server.Data;
using CicloDesafio.Server.Data.Dtos;
using CicloDesafio.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace CicloDesafio.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ParticipanteController : ControllerBase
{
    private CicloDesafioContext _context;
    private IMapper _mapper;

    public ParticipanteController(CicloDesafioContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public IActionResult AdicionarParticipante([FromBody] CreateParticipanteDto participanteDto)
    {
        Participante participante = _mapper.Map<Participante>(participanteDto);
        _context.Participantes.Add(participante);
        _context.SaveChanges();

        return CreatedAtAction(nameof(ListarParticipantePorId), new { id = participante.Id }, participante);
    }

    [HttpGet]
    public IEnumerable<ReadParticipanteDto> ListarParticipantes()
    {        
        var participantes = _context.Participantes.ToList();
        var participantesDto = _mapper.Map<List<ReadParticipanteDto>>(participantes);
        return participantesDto;
    }

    [HttpGet("{id}")]
    public IActionResult ListarParticipantePorId(Guid id)
    {
        var participante = _context.Participantes.FirstOrDefault(participante => participante.Id == id);
        if (participante == null) return NotFound();

        var participanteDto = _mapper.Map<ReadParticipanteDto>(participante);
        return Ok(participanteDto);
    }

    [HttpPut("{id}")]
    public IActionResult AtualizarParticipante(Guid id, [FromBody] UpdateParticipanteDto participanteDto)
    {
        var participante = _context.Participantes.FirstOrDefault(participante => participante.Id == id);
        if (participante == null) return NotFound();

        _mapper.Map(participanteDto, participante);
        _context.SaveChanges();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeletaParticipante(Guid id)
    {
        var participante = _context.Participantes.FirstOrDefault(participante => participante.Id == id);
        if (participante == null) return NotFound();

        _context.Remove(participante);
        _context.SaveChanges();
        return NoContent();
    }
}
