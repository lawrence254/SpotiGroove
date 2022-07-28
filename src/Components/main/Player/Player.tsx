import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded';
import VolumeMuteRoundedIcon from '@mui/icons-material/VolumeMuteRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { LinearProgress,linearProgressClasses, Slider, styled } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Value } from 'sass';
import PlayerControls from './PlayerControls';
import './styles.scss';
type Tracks =
    {
        title: string,
        artist: string,
        audioSrc: string,
        color: string,
    }[]


const Player = (tracks : Tracks) => {
    const [isPlaying, setIsPlayingStatus] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0)

    const tracksLength = tracks.length;

    const { audioSrc } = tracks[trackIndex];
    // Required Refs to access media player controls and lower level functions. https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { duration } = audioRef.current;
    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%`
        : "0%";

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        let current: any = intervalRef.current
        current = setInterval(() => {
            if (audioRef.current.ended) {
                toNext();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        });
    };

    const onScrub = (event: Event, value: number) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlayingStatus(true);
        }
        startTimer();
    };

    const toPrevious = () => {
        // console.log(trackIndex)
        if (trackIndex - 1 < 0) {
            setTrackIndex(0);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    };

    const toNext = () => {
        if (trackIndex < Object.keys(tracks).length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlayingStatus(true);
            startTimer();
        } else {
            isReady.current = true;
        }
    }, [trackIndex])

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current)
        }
    }, [])

    //Styled progress
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height:10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    return (
        <div className="controls">
            <div className="mainControls">
                <QueueMusicRoundedIcon className='queueList' />
                <div className="mainPlayer">
                    <div className="volumeControl">
                        <VolumeMuteRoundedIcon className='volDown' />
                        <Slider className='volume' />
                        <VolumeUpRoundedIcon className='volUp' />
                    </div>
                    <PlayerControls
                        isPlaying={isPlaying}
                        onNextClick={toNext}
                        onPreviousClick={toPrevious}
                        onPlayPause={setIsPlayingStatus}

                    />
                </div>

            </div>
            <div className="scrub">
                <p className="startTime">{trackProgress.toFixed(2)}</p>
                {/* <Slider className='scrobbler'
                min={0}
                max={Number(duration.toFixed(2) ? duration.toFixed(2) : `${duration.toFixed(2)}`)}
                step={0.05}
                value={trackProgress}
                // onChange={(e)=>onScrub(e, trackProgress)}
                 /> */}
                 <BorderLinearProgress className='scrobbler'
                    variant="determinate"
                    value={trackProgress}
                 />
                <p className="endTime">{duration.toFixed(2)}</p>
            </div>
        </div>
    )
}
export default Player;