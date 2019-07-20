/************************************************************
    Main component for sound controls.
    Allows user to control the uploaded sound file.
    Current features:
    1.  Load (1 time loading, page needs to be refreshed on song end)
    2.  Play/Pause song
    3.  Change volume

    TODO:
    1.  Allow users to load a new sound even if there is one currently loaded.
    2.  Implement slider for the sound file buffer/duration - allow users to control
        the part of the song to be played.
************************************************************/

import React from 'react';
import './SoundPlayer.styles.css';

/***********************************************************
    Parameters (src/pages/App/App.js):
    state:
    1. volume
    2. buttonText

    functions:
    1.  onPlayPress
    2.  onVolumeChange
    3.  onFileUpload
*************************************************************/
const SoundPlayer = ({ volume, onPlayPress, onVolumeChange, onFileUpload, buttonText }) => (
    <div className='soundplayer'>
        <input type="file" name="file" onChange={onFileUpload}/>
        <div className='soundplayer-controls'>
            <div>
                <button onClick={onPlayPress}>{buttonText}</button>
            </div>
            <div>
                <label>Volume</label>
                <input type="range"
                    name="volume"
                    value={volume}
                    min="0.0"
                    max="1.0"
                    step="0.1"
                    onChange={onVolumeChange}
                />
            </div>
        </div>
    </div>
);

export default SoundPlayer;