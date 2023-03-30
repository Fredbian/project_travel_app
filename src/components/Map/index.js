import GoogleMapReact from 'google-map-react'
import {
    Paper,
    Typography,
    useMediaQuery,
    Rating
} from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'
import './index.css'

const GoogleMapAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const Map = () => {
    const isMobile = useMediaQuery('(min-width:600px)')
    const coordinates = {lat: 0, lng: 0} 

    return (
        <div className='mapContainer'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GoogleMapAPIKey }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map