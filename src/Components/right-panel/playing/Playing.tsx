import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import "./styles.scss";

const Playing = () => {
  return (
    <div className="currentlyPlaying">
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-poster-template-a1cdc24f59156f97168fb2840fe2ad61_screen.jpg?ts=1561431305"
        alt="Song Name"
      />
      <div className="songDetails">
        <p className="song-title">Super Song Name</p>
        <p className="artist">Tylor Swift</p>
        <FavoriteOutlinedIcon className="likes"/>
      </div>
    </div>
  );
};

export default Playing;
