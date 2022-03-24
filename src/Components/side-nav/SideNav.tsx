import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';

import { List, ListItemButton, ListItemText } from '@mui/material';
import "./style.scss";
const SideNav = () => {
  return (
    <div className="side">
      <nav>
        <List>
          <ListItemButton>
            <HomeOutlinedIcon/>
            <ListItemText primary="Home"/>
          </ListItemButton>
        
          <ListItemButton>
            <WhatshotOutlinedIcon/>
            <ListItemText primary="Trends"/>
          </ListItemButton>

          <ListItemButton>
            <LibraryMusicOutlinedIcon/>
            <ListItemText primary="Library"/>
          </ListItemButton>
        </List>
      </nav>
      <div className="section-title">Discover</div>
      <nav>
        <List>
            <ListItemButton>
            <CalendarTodayOutlinedIcon/>
            <ListItemText primary="Discover Weekly"/>
          </ListItemButton>

          <ListItemButton>
            <AlbumOutlinedIcon/>
            <ListItemText primary="Made For You"/>
          </ListItemButton>

          <ListItemButton>
            <MusicVideoOutlinedIcon/>
            <ListItemText primary="Daily Mix"/>
          </ListItemButton>
        </List>
      </nav>
      <div className="section-title">Your Collection</div>
      {/* <ul>
        <li>Liked Songs</li>
        <li>Favourite Artists</li>
        <li>Playlists</li>
      </ul> */}
      <nav>
        <List>
            <ListItemButton>
            <FavoriteBorderOutlinedIcon/>
            <ListItemText primary="Liked Songs"/>
          </ListItemButton>

          <ListItemButton>
            <VerifiedOutlinedIcon/>
            <ListItemText primary="Favourite Artist"/>
          </ListItemButton>

          <ListItemButton>
            <PlaylistPlayOutlinedIcon/>
            <ListItemText primary="Playlists"/>
          </ListItemButton>
        </List>
      </nav>
    </div>
  );
};
export default SideNav;
