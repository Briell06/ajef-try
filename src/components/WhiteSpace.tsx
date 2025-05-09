import { Box, Typography } from "@mui/material";
import BG from "./assets/background.jpg";

function WhiteSpace() {
  return (
    <Box
      display="grid"
      height={350}
      sx={{
        background: `linear-gradient(rgba(0, 40, 9) , transparent), url(${BG}) top / cover fixed `,
        placeContent: "center",
      }}
    >
      <Typography
        variant="h1"
        color="white"
        fontWeight={700}
        textAlign="center"
      >
        Proyecto Ajef Raíces
      </Typography>
    </Box>
  );
}

export default WhiteSpace;
