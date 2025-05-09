import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import WhiteSpace from "./components/WhiteSpace";

function App() {
  return (
    <Grid container flexDirection="column" minHeight="100vh">
      <Grid>
        <NavBar />
      </Grid>
      <Grid flex="1">
        <WhiteSpace />
      </Grid>
      <Grid>footer</Grid>
    </Grid>
  );
}

export default App;
