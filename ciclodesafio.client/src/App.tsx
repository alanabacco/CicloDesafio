import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ciclista from "./assets/ciclista.png";
// import { useAppThemeContext } from "./themes/ThemeContext";

function App() {
  // const { toggleTheme } = useAppThemeContext();

  return (
    <Box maxWidth="lg" marginInline="auto" marginBlock={3}>
      <Typography variant="h2" component="h1" textAlign="center" paddingInline={4}>
        Ciclo Desafio 2024
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
        {/* <Button variant="contained" onClick={toggleTheme}>
        Toogle Theme
      </Button> */}
        <Box minWidth={320} maxWidth={400} paddingInline={1} flex={1}>
          <img
            src={ciclista}
            alt="Ciclista - fonte: produzido no criador de imagens do Bing"
            width="100%"
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          paddingInline={4}
          maxWidth={700}
          textAlign="right"
        >
          <Typography variant="body1">
            Boas vindas ao Ciclo Desafio 2024, uma emocionante competição de ciclismo e
            corrida a pé que vai agitar as ruas da cidade! Junte-se a nós para um dia de
            superação, camaradagem e pura energia esportiva. No dia 30 de dezembro de
            2024, o centro da cidade será o epicentro dessa experiência única.
          </Typography>
          <Typography variant="h6" component="h2">
            Inscreva-se agora e faça parte desta jornada esportiva inesquecível!
          </Typography>
          <Box display="flex" justifyContent="end">
            <Button
              to="/formulario"
              component={RouterLink}
              variant="contained"
              size="large"
            >
              FAZER INSCRIÇÃO
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
