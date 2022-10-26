import { useEffect, useState } from 'react';
import { Music } from '../../assets/player/tracksInfo';
import { getNewRealeases } from '../../services/NetworkServices';
import Banner from './Banner/Banner';
import NavBar from './MainNav/NavBar';
import Player from './Player/Player';
import SongItem from './Songs/SongItem';
import './styles.scss';

const Main = () => {
    const [currentReleases, setCurrentRealeases] = useState({})
    useEffect(() => {
        async function fetchData() {
            let release = await getNewRealeases();
            return release;
        }
        const data = fetchData();
        setCurrentRealeases(data);
    }, [])
    return (
        <div className="container">
            <NavBar />
            <Banner />
            <SongItem />
            <Player {...Music} />
            {console.log()}
        </div>
    )
}
export default Main;