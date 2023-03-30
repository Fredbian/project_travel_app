import Header from "../../components/Header";
import Map from "../../components/Map";
import List from "../../components/List";
import { CssBaseline, Grid } from "@mui/material";
import {getLocationsData} from '../../api'
import { useState, useEffect } from "react";


function TravelApp() {
  const [locations, setLocations] = useState()


  useEffect(() => {
    getLocationsData()
      .then(data => {
        console.log(data);
        setLocations(data)
      })
  }, [])

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
      </CssBaseline>
    </>
  );
}

export default TravelApp;
