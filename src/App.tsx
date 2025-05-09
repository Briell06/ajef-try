import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid container flexDirection="column" minHeight="100vh">
      <Grid>
        <NavBar />
      </Grid>
      <Grid flex="1">content</Grid>
      <Grid>footer</Grid>
    </Grid>
  );
}

export default App;
