import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Chip,
    Rating
} from "@mui/material"
import {
    LocationOn,
    Phone
} from "@mui/icons-material"


const LocationDetails = ({ location, selected, refProp }) => {
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 250 }}
                title={location.name}
                image={location.photo ? location.photo.images.large.url : 'https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" sx={{ fontSize: 18, fontWeight: 900 }}>{location.name}</Typography>
                <Box display='flex' justifyContent='space-between' >
                    <Rating value={Number(location.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1" sx={{ fontSize: 16, paddingTop: '6px' }}>Out of {location.num_reviews} reviews</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between' >
                    <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 700 }} >Price</Typography>
                    <Typography gutterBottom variant="subtitle1" sx={{ fontSize: 16 }}>{location.price_level}</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between' >
                    <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 700 }} >Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1" sx={{ fontSize: 16 }}>{location.ranking}</Typography>
                </Box>
                {location?.awards?.map((award) => (
                    <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color='textSecondary' sx={{ fontSize: 16 }}>{award.display_name}</Typography>
                    </Box>
                ))}
                {location?.cuisine?.map(({ name }) => (
                    <Chip key={name} size='small' label={name} sx={{ margin: '1px', fontSize: 14, height: 15, paddingTop: '5px', paddingBottom: '5px' }} />
                ))}
                {location?.address && (
                    <Typography
                        gutterBottom
                        variant="body2"
                        color='textSecondary'
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', fontSize: 16 }}
                    >
                        <LocationOn sx={{ fontSize: 16, marginRight: '2px' }} /> {location.address}
                    </Typography>
                )}
                {location?.phone && (
                    <Typography
                        gutterBottom
                        variant="body2"
                        color='textSecondary'
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 16 }}
                    >
                        <Phone sx={{ fontSize: 16, marginRight: '2px' }} /> {location.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button sx={{ fontSize: 16, margin: -1 }} size="small" color="primary" onClick={() => window.open(location.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button sx={{ fontSize: 16, margin: -1 }} size="small" color="primary" onClick={() => window.open(location.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default LocationDetails