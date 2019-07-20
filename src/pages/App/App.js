import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import SoundPlayer from '../../components/SoundPlayer/SoundPlayer.component';
import sketch from '../../vendor/sketches/sketch';
import './App.css';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            stateSketch: sketch,
            uploadedSong: null,
            volume: 0.5,
            isPlaying: false,
            buttonText: 'Play'
        }
    }

    onVolumeChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    onPlayPress = event => {
        this.setState({isPlaying: !(this.state.isPlaying)}, () => {
            this.setState({buttonText: this.state.isPlaying ? 'Pause' : 'Play'})
        });
    }

    onFileUpload = event => {
        this.setState({uploadedSong: event.target.files[0]});
    }

    render() {
        const { stateSketch, uploadedSong, volume, isPlaying, buttonText } = this.state;
        return (
            <div className='visualmusic'>
                <P5Wrapper sketch = {stateSketch}
                    volume = {volume}
                    isPlaying = {isPlaying}
                    uploadedSong = {uploadedSong}/>
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
