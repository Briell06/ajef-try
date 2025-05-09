import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import WhiteSpace from "./components/WhiteSpace";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid container flexDirection="column" minHeight="100vh">
      <Grid>
        <NavBar />
      </Grid>
      <Grid flex="1">
        <WhiteSpace />
        <Content />
      </Grid>
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
