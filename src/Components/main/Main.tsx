import tracksInfo from '../../assets/player/tracksInfo';
import Banner from './Banner/Banner';
import NavBar from './MainNav/NavBar';
import Player from './Player/Player';
import './styles.scss';
const Main = () => {
    return (
        <div className="container">
            <NavBar />
            <Banner />
            <Player {...tracksInfo} />
        </div>
    )
}
export default Main;