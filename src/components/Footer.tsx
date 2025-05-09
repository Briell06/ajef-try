import { Facebook } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import Ajef from "./assets/favibon.png";

function Footer() {
  return (
    <Box width="100%" color="white" bgcolor="black" component="footer" pt={3}>
      <Container fixed>
        <Box
          display="flex"
          justifyContent={"center"}
          flexDirection="column"
          alignItems="center"
        >
          <img
            src={Ajef}
            alt="logo ajefista"
            style={{ width: 90, height: "auto" }}
          />
          <Typography textAlign="center">
            Puede seguir nuestro trabajo aquí
          </Typography>
          <Button color="inherit" size="large" sx={{ gap: 1 }}>
            <Facebook /> Facebook
          </Button>
        </Box>
        <hr
          style={{
            height: 3,
            width: "60%",
            backgroundColor: "white",
            borderRadius: 10,
            outline: "none",
            border: "none",
            marginTop: 20,
          }}
        />
        <Typography pb={2} textAlign="center">
          Copyright - Todos los derechos Reservados
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
