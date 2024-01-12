using AutoMapper;
using CicloDesafio.Server.Data.Dtos;
using CicloDesafio.Server.Models;

namespace CicloDesafio.Server.Profiles;

public class ParticipanteProfile : Profile
{
    public ParticipanteProfile()
    {
        CreateMap<CreateParticipanteDto, Participante>();
        CreateMap<UpdateParticipanteDto, Participante>();
        CreateMap<Participante, ReadParticipanteDto>();
    }
}
