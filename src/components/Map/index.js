import GoogleMapReact from 'google-map-react'
import {
    Paper,
    Typography,
    useMediaQuery,
    Rating
} from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'
import './index.css'
import { width } from '@mui/system'

const GoogleMapAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const Map = ({ setCoordinates, setBounds, coordinates, locations }) => {
    const isDesktop = useMediaQuery('(min-width:600px)')

    return (
        <div className='mapContainer'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GoogleMapAPIKey }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    //   console.log(e)  
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onChildClick={''}
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
                                        sx={{ fontSize: 9 }}
                                    >
                                        {location.name}
                                    </Typography>
                                    <img 
                                        className='pointer'
                                        src={location.photo ? location.photo.images.large.url : 'https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        alt={location.name}
                                    />
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map