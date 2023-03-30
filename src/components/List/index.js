import { useState } from "react"
import {
    CircularProgress,
    Grid,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent
} from "@mui/material"
import './index.css'



const List = () => {
    const [type, setType] = useState('')
    const [rating, setRating] = useState('')


    return (
        <div className="container">
            <Typography variant="h4">
                Restaurants, Hotels & Attractions around you
            </Typography>
            <FormControl sx={{ m: 1, marginBottom: '30px', minWidth: 160, }}>
                <InputLabel>Type</InputLabel>
                <Select
                    label='Type'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, marginBottom: '30px', minWidth: 160, }}>
                <InputLabel >Rating</InputLabel>
                <Select
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
        </div>
    )
}

export default List