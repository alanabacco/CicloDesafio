import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

interface FormProps extends ChangeEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    name: { value: string };
    telefone: { value: string };
    cidade: { value: string };
    genero: { value: 0 | 1 | 2 | 3 };
    cpf: { value: string };
    modalidade: { value: 0 | 1 };
  };
}

export default function Formulario() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleSnackbar = () => {
    setOpen(true);
  };
  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const [genero, setGenero] = useState("");
  const handleChangeGenero = (event: SelectChangeEvent) => {
    setGenero(event.target.value as string);
  };
  const [modalidade, setModalidade] = useState("");
  const handleChangeModalidade = (event: SelectChangeEvent) => {
    setModalidade(event.target.value as string);
  };

  const handleSubmit = (e: FormProps) => {
    e.preventDefault();

    const data = {
      nome: e.target.nome.value.trim(),
      telefone: e.target.telefone.value.trim(),
      cidade: e.target.cidade.value.trim(),
      genero: Number(genero),
      cpf: e.target.cpf.value.trim(),
      modalidade: Number(modalidade),
    };
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    };

    try {
      fetch("https://localhost:44346/participante", options).then((response) => {
        console.log(data);
        if (response.ok) {
          navigate("/");
          return response.body;
        } else {
          handleSnackbar();
          console.error(
            "Não foi possível cadastrar os dados agora, tente novamente mais tarde."
          );
        }
      });
    } catch (error) {
      handleSnackbar();
      console.error(error);
      throw new Error("Não foi possível cadastrar os dados.");
    }
  };

  return (
    <Box
      maxWidth="sm"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={1}
      marginInline="auto"
      marginBlock={3}
      paddingInline={2}
    >
      <Typography variant="h3" component="h1">
        Ciclo Desafio 2024
      </Typography>
      <Typography variant="h4" component="h2">
        Formulário de inscrição
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "0.5rem",
          width: "100%",
        }}
      >
        <TextField id="nome" label="Nome" variant="outlined" fullWidth required />
        <TextField id="telefone" label="Telefone" variant="outlined" fullWidth required />
        <TextField id="cidade" label="Cidade" variant="outlined" fullWidth required />

        <FormControl fullWidth required>
          <InputLabel id="genero-label">Gênero</InputLabel>
          <Select
            labelId="genero-label"
            id="genero"
            value={genero}
            label="Gênero"
            onChange={handleChangeGenero}
          >
            <MenuItem value={0}>Feminino</MenuItem>
            <MenuItem value={1}>Masculino</MenuItem>
            <MenuItem value={2}>Não Binário</MenuItem>
            <MenuItem value={3}>Outro</MenuItem>
          </Select>
        </FormControl>

        <TextField id="cpf" label="CPF" variant="outlined" fullWidth required />

        <FormControl fullWidth required>
          <InputLabel id="modalidade-label">Modalidade da competição</InputLabel>
          <Select
            labelId="modalidade-label"
            id="modalidade"
            value={modalidade}
            label="Modalidade da competição"
            onChange={handleChangeModalidade}
            required
          >
            <MenuItem value={0}>Desafio de ciclismo</MenuItem>
            <MenuItem value={1}>Corrida a pé</MenuItem>
          </Select>
        </FormControl>
        <Box display="flex" gap={1} justifyContent="space-between">
          <Button to="/" component={RouterLink} variant="outlined">
            Cancelar
          </Button>
          <Button variant="contained" type="submit">
            Cadastrar inscrição
          </Button>
        </Box>

        <Snackbar
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            variant="filled"
            severity="error"
            sx={{ width: "100%" }}
          >
            Não foi possível cadastrar os dados agora, tente novamente mais tarde.
          </Alert>
        </Snackbar>
      </form>
    </Box>
  );
}
