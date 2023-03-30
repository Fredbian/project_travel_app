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

const Map = ({ setCoordinates, setBounds, coordinates }) => {
    const isMobile = useMediaQuery('(min-width:600px)')

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
            </GoogleMapReact>
        </div>
    )
}

export default Map