import { Button } from "@mui/material";
import { createPopUp } from '../../services/LoginService';
import Playing from "./playing/Playing";
import Profile from "./profile/Profile";
import Recents from "./recents/Recents";
import "./styles.scss";

const RightMenu = (token: any) => {
  return (
    <div className="panel">
      {token!=='' ? <Profile /> : <Button onClick={() => createPopUp()} color='success' variant="contained">Login to Spotify</Button>}
      <div className="divider">
        <p>Recently Played</p>
        <a href="#">See All</a>
      </div>
      <Recents />
      <Recents />
      <Recents />
      <Playing />
    </div>
  );
};

export default RightMenu;
