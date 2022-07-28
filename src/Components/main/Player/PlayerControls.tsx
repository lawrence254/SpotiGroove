import { Icon, IconButton } from "@mui/material";
import { Slider } from '@mui/material';
import Button from "@mui/material/Button";
import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeMuteRoundedIcon from '@mui/icons-material/VolumeMuteRounded';
type Controls ={
    onNextClick:any
    onPreviousClick:any
    onPlayPause:any
    isPlaying:boolean
}
const PlayerControls = ({ onNextClick, onPreviousClick, onPlayPause, isPlaying }:Controls) => {
    return (
        <>
            
            <IconButton>
                <ShuffleRoundedIcon />
            </IconButton>
            <IconButton
                onClick={()=>onPreviousClick()}>
                <SkipPreviousRoundedIcon />
            </IconButton>
            {isPlaying ?
                (<IconButton
                    onClick={() => onPlayPause(false)}
                >
                    <PauseCircleFilledOutlinedIcon />
                </IconButton>) :
                (
                    <IconButton
                        onClick={() => onPlayPause(true)}
                    >
                        <PlayCircleRoundedIcon />
                    </IconButton>)
            
            }
            <IconButton
                onClick={()=>onNextClick()}>

                <SkipNextRoundedIcon />
            </IconButton>
            <IconButton>
                <RepeatRoundedIcon />
            </IconButton>
        </>
    )
}

export default PlayerControls;


