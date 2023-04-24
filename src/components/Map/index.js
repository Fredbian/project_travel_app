import GoogleMapReact from 'google-map-react'
import {
    Paper,
    Typography,
    useMediaQuery,
    Rating
} from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'
import './index.css'
import { mapStyles } from './mapStyles'


const GoogleMapAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const Map = ({ setCoordinates, setBounds, coordinates, locations, setChildClicked, weatherData }) => {
    const isDesktop = useMediaQuery('(min-width:600px)')

    // console.log(weatherData);
    return (
        <div className='mapContainer'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GoogleMapAPIKey }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    //   console.log(e)  
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {locations?.map((location, index) => (
                    <div
                        key={index}
                        className='markerContainer'
                        lat={location.latitude}
                        lng={location.longitude}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlined color='primary' fontSize='large' />
                            ) : (
                                <Paper
                                    elevation={3}
                                    sx={{ width: 100, padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                >
                                    <Typography
                                        sx={{ fontSize: 13, fontWeight: 700 }}
                                    >
                                        {location.name}
                                    </Typography>
                                    <img
                                        className='pointer'
                                        src={location.photo ? location.photo.images.large.url : 'https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        alt={location.name}
                                    />
                                    <Rating sx={{ fontSize: 18 }} value={Number(location.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                ))}
                {weatherData && (
                    <div lat={weatherData.lat} lng={weatherData.lon}>
                        <img src={`https://openweathermap.org/img/wn/${weatherData?.current?.weather[0].icon}@2x.png`} alt='weather' />
                    </div>
                )}
            </GoogleMapReact>
        </div>
    )
}

export default Map