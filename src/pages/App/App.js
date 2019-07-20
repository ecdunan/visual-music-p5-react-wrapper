import React from 'react';
import SoundPlayer from '../../components/SoundPlayer/SoundPlayer.component';
import Visualizer from '../../components/Visualizer/Visualizer.component';
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            uploadedSong: null,
            volume: 0.5,
            isPlaying: false,
            buttonText: 'Play'
        }
    }

    /********************************************
        Handles changing of volume state upon
        slider interaction. State changes are sent to
        sketch file adjusting the sound's actual
        volume to change ellipse diameter on redraw.
    ********************************************/
    onVolumeChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    /*********************************************
        Handles toggling of pause/play button.
        Used to monitor if the user wants to pause/play
        the loaded sound. State changes are sent to
        sketch file which executes a .pause() or .play()
        command.
    *********************************************/
    onPlayPress = event => {
        this.setState({isPlaying: !(this.state.isPlaying)}, () => {
            this.setState({buttonText: this.state.isPlaying ? 'Pause' : 'Play'})
        });
    }

    /********************************************
        Handles file uploads. Uploaded file is saved
        as state and is passed down to the sketch file as props.
        Sketch then loads the file using p5.Sound library.
    *********************************************/
    onFileUpload = event => {
        this.setState({uploadedSong: event.target.files[0]});
    }

    render() {
        const { uploadedSong, volume, isPlaying, buttonText } = this.state;
        return (
            <div className='visualmusic'>
                <Visualizer
                    volume = {volume}
                    isPlaying = {isPlaying}
                    uploadedSong = {uploadedSong}
                />
                <SoundPlayer
                    volume = {volume}
                    buttonText = {buttonText}
                    onPlayPress = {this.onPlayPress}
                    onVolumeChange = {this.onVolumeChange}
                    onFileUpload = {this.onFileUpload}
                />
            </div>
        );
    }
}

export default App;