import { styled, alpha } from '@mui/material/styles';
import {
    AppBar,
    Box,
    Toolbar,
    // IconButton,
    Typography,
    InputBase
} from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete } from '@react-google-maps/api';
import {useState} from 'react'

//------- APP BAR STYLE---------//
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
//------- APP BAR STYLE---------//


const Header = ({ setCoordinates }) => {
    const [autocomplete, setAutocomplete] = useState(null)
    const onLoad = (autoC) => setAutocomplete(autoC)
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat()
        const lng = autocomplete.getPlace().geometry.location.lng()
        setCoordinates({lat, lng})
    }


    return (
        <>
            {/* APP BAR */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>                    
                        <Typography
                            variant="h1"
                            noWrap
                            component="div"
                            sx={{ fontSize: 25, fontWeight: 900, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Travel App
                        </Typography>
                        <Typography>
                            Explore new places
                        </Typography>
                        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Autocomplete>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* APP BAR */}
        </>
    )
}

export default Header