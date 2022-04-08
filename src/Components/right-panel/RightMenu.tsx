import "./styles.scss";
import Profile from "./profile/Profile";
import Recents from "./recents/Recents";
import Playing from "./playing/Playing";

const RightMenu = () => {
  return (
    <div className="panel">
      <Profile />
      <div className="divider">
        <p>Recently Played</p>
        <a href="#">See All</a>
      </div>
      <Recents />
      <Recents />
      <Recents />

      <Playing/>
    </div>
  );
};

export default RightMenu;
