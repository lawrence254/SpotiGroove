import {Music} from '../../assets/player/tracksInfo';
import Banner from './Banner/Banner';
import NavBar from './MainNav/NavBar';
import Player from './Player/Player';
import SongItem from './Songs/SongItem';
import './styles.scss';
const Main = () => {
    
    return (
        <div className="container">
            <NavBar />
            <Banner />
            <SongItem/>
            <Player {...Music} />
        </div>
    )
}
export default Main;