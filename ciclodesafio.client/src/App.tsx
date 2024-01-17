import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import "./App.css";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Ciclo Desafio 2024
      </Typography>
      <Typography variant="body1" gutterBottom>
        Boas vindas ao Ciclo Desafio 2024, uma emocionante competição de ciclismo e
        corrida a pé que vai agitar as ruas da cidade! Junte-se a nós para um dia de
        superação, camaradagem e pura energia esportiva. No dia 30 de janeiro de 2024, o
        centro da cidade será o epicentro dessa experiência única.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Inscreva-se agora e faça parte desta jornada esportiva inesquecível!
      </Typography>

      <Link to="/formulario" component={RouterLink}>
        Fazer inscrição
      </Link>
    </div>
  );
}

export default App;
