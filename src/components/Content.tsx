import { Box, Container, Paper, Typography } from "@mui/material";
import Logo from "./assets/logo.jpg";

function Content() {
  return (
    <Box
      p={2}
      minHeight={600}
      sx={{ background: `linear-gradient( #126E34, black )` }}
    >
      <Container fixed>
        <Paper elevation={24} sx={{ borderRadius: 3 }}>
          <Container fixed sx={{ display: "grid", placeContent: "center" }}>
            <img src={Logo} alt="logo" style={{ width: 300, height: "auto" }} />
            <Typography textAlign="center" fontWeight={500}>
              Para nadie es un secreto lo complicado de la situación social del
              momento histórico que nos ha tocado vivir, cada persona a lo largo
              de su día debe enfrentar una serie de conflictos y vicisitudes
              para lograr cada una de sus necesidades fundamentales, muchos lo
              hacen a veces incluso al módico precio de la pérdida de los
              valores y olvidando la necesidad de ayuda mutua de otros ya
              superados por la sociedad, la edad o algún que otro vicio. Aquí
              entra en juego el proyecto AJEF "Raíces" creado por los jóvenes
              ajefistas que integramos la Logia AJEF Herminio Rivera bajo los
              auspicios de la Respetable y Centenaria Logia Reivindicación,
              quienes radicamos en el poblado de Los Palos y tenemos como
              principal objetivo la realización de obras benéficas: la ayuda a
              esas personas que no pueden valerse por si mismas; la reparación
              de zonas emblemáticas y significativas de nuestro pueblo como lo
              son los bustos, tarjas y monumentos; planificación de actividades
              recreativas para todas las edades y mucho más con lo que poder
              ayudar y hacer un poco más amena la vida a cada persona de nuestro
              poblado. Por supuesto para todos estos planes se necesitan ciertos
              recursos que quisiéramos tener en nuestras manos pero
              desgraciadamente no es así, por esto hemos ideado una serie de
              fuentes de ingresos para fines benéficos que próximamente
              estaremos anunciando por estos mismos medios como son la venta de
              garaje con ropa muy variada y asequible, la organización de
              eventos beneficios, entre otras. Eso sería la esencia de lo que se
              basa nuestro proyecto (sin fin de lucro alguno) solo
              necesitaríamos el apoyo de todos. Podrán reconocer tanto nuestras
              diferentes ofertas como las obras benéficas que estaremos
              realizando mediante este mismo medio, acercándose a algún joven
              ajefista o directamente con el logotipo que nos identifica, así
              sabrá donde obtener productos con precios asequibles junto a la
              satisfacción de saber que irá destinado a la ayuda de alguien que
              realmente lo necesita
            </Typography>
          </Container>
        </Paper>
      </Container>
    </Box>
  );
}

export default Content;
