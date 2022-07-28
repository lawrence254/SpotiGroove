import "./styles.scss";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const NavBar = () => {
    return (
        <div className="navContainer">
            <div className="navi">
                <ArrowBackIosOutlinedIcon className="back" />
                <ArrowForwardIosOutlinedIcon className="forward" />
            </div>
            <div className="searchBar">
                <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                    <OutlinedInput
                        id="searchBar"
                        sx={{ borderRadius: 30, backgroundColor: `#f2f3f7` }}
                        startAdornment={<InputAdornment position="start"><SearchOutlinedIcon /></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                    />
                </FormControl>
            </div>
        </div>
    )
};
export default NavBar;
