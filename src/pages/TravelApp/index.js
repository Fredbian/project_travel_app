import Header from "../../components/Header";
import Map from "../../components/Map";
import List from "../../components/List";
import { CssBaseline, Grid } from "@mui/material";
import { getLocationsData } from '../../api'
import { useState, useEffect } from "react";


function TravelApp() {
  const [locations, setLocations] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    // console.log(bounds);
    setIsLoading(true)
    if (bounds) {
      getLocationsData(bounds.sw, bounds.ne)
        .then(data => {
          console.log(data);
          setLocations(data)
          setIsLoading(false)
        })
    }
  }, [coordinates, bounds])

  return (
    <>
      <CssBaseline>
        <Header />
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List
              locations={locations}
              childClicked={childClicked}
              isLoading={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              locations={locations}
              setChildClicked={setChildClicked}
            />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
}

export default TravelApp;
