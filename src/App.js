import Header from "./components/Header";
import Map from "./components/Map";
import List from "./components/List";
import LocationDetails from "./components/LocationDetails";
import { CssBaseline, Grid } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline>
        <Header />
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>
        <LocationDetails />
        <Map />

      </CssBaseline>
    </>
  );
}

export default App;
