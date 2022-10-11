import { Button } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../../App";
import { createPopUp, tokens } from '../../services/LoginService';
import Playing from "./playing/Playing";
import Profile from "./profile/Profile";
import Recents from "./recents/Recents";
import "./styles.scss";

const RightMenu = () => {
  let loginState = useContext(LoginContext)
  return (
    <div className="panel">
      <input type='text' name='code' id='code' hidden />
      {loginState.status ? <Profile /> : <Button onClick={() => createPopUp()} color='success' variant="contained">Login to Spotify</Button>}
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
