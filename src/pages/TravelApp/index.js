import Header from "../../components/Header";
import Map from "../../components/Map";
import List from "../../components/List";
import { CssBaseline, Grid } from "@mui/material";
import { getLocationsData, getWeatherData } from '../../api'
import { useState, useEffect } from "react";


const TravelApp = () => {
  const [locations, setLocations] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  const [filteredLocations, setFilteredLocations] = useState([])


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    const filteredLocations = locations.filter(location => location.rating > rating)
    setFilteredLocations(filteredLocations)
  }, [rating, locations])

  useEffect(() => {
    // console.log(bounds);
    if (bounds.sw && bounds.ne) {
      setIsLoading(true)

      getWeatherData(coordinates.lat, coordinates.lng)
        .then(data => setWeatherData(data))

      getLocationsData(type, bounds.sw, bounds.ne)
        .then(data => {
          // console.log(data);
          setLocations(data?.filter(location => location.name && location.num_reviews > 0))
          setFilteredLocations([])
          setIsLoading(false)
        })
    }
  }, [type, bounds, coordinates])

  return (
    <>
      <CssBaseline>
        <Header setCoordinates={setCoordinates} />
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List
              locations={locations}
              childClicked={childClicked}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}             
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              locations={filteredLocations.length ? filteredLocations : locations}
              setChildClicked={setChildClicked}
              weatherData={weatherData}
            />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
}

export default TravelApp;
