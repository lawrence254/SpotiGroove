import { List, ListItemButton } from '@mui/material';
import { useState } from 'react';
import { Music } from '../../../assets/player/tracksInfo';
import './SongItem.scss';

type Tracks =
    {
        title: string,
        artist: string,
        audioSrc: string,
        color: string,
    }[]

const SongItem = () => {
    const [selectedSong, setSelectedSong] = useState(0)

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedSong(index);
        
    };
    return <>
        <List>
            {Music.map(( tr: any, index) => (
                <ListItemButton
                    key={index}
                    selected={selectedSong ===index}
                    onClick={(event) => handleListItemClick(event, index)}>
                    <div className="songItem">
                        <p className="trackNumber">{index+1}</p>
                        <img src="https://media.newyorker.com/photos/60747954c920e996bd1e486d/master/pass/Battan-FearlessTaylorsVersion.jpg" alt="" className="artistImage" />
                        <p className="songTitle">{tr.title}</p>
                        <p className="plays">6798765</p>
                        <p className="time">3:09</p>
                        <p className="albumName">{tr.artist}</p>
                    </div>
                </ListItemButton>
            ))}
        </List>
        <div className="column">
            <div className="row">
            </div>
        </div>
    </>
}

export default SongItem;

