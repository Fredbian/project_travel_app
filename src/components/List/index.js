import { useState } from "react"
import {
    CircularProgress,
    Grid,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material"
import './index.css'
import LocationDetails from '../LocationDetails'



const List = ({ locations }) => {
    const [type, setType] = useState('')
    const [rating, setRating] = useState('')

    return (
        <div className="container">
            <Typography variant="h6" sx={{fontSize: 15, fontWeight: 900}} >
                Restaurants, Hotels & Attractions around you
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 160, height: 40}} size="small" >
                <InputLabel sx={{fontSize: 12}}>Type</InputLabel>
                <Select
                    sx={{fontSize: 12}}
                    label='Type'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, marginBottom: '25px', minWidth: 160, height: 40 }} size="small">
                <InputLabel sx={{fontSize: 12}}>Rating</InputLabel>
                <Select
                    sx={{fontSize: 12}}                   
                    label='Rating'
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3 stars</MenuItem>
                    <MenuItem value={4}>Above 4 stars</MenuItem>
                    <MenuItem value={4.5}>Above 4.5 stars</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} sx={{ height: '75vh', overflow: 'auto' }} >
                {locations?.map((location, index) => (
                    <Grid item key={index} xs={12}>
                        <LocationDetails location={location} />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default List