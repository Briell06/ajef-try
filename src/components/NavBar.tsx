import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "./assets/logo.jpg";

function NavBar() {
  return (
    <>
      <AppBar component="nav" position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack
            direction="row"
            display="flex"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <IconButton>
              <Avatar src={Logo} sx={{ width: 60, height: "auto" }} />
            </IconButton>
            <Typography
              ml={{ sm: 2, md: 4, lg: 6 }}
              display={{ xs: "none", sm: "block" }}
              textAlign="center"
              fontSize={22}
            >
              Herminio Rivera
            </Typography>
          </Stack>
          <Stack direction="row" gap={{ lg: 4 }}>
            <Button color="inherit">INICIO</Button>
            <Button color="inherit">NOVEDADES</Button>
            <Button color="inherit">INFORMACIÓN</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
