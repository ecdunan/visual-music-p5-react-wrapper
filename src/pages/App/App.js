import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
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
        return (
            <div>
                <P5Wrapper sketch={this.state.stateSketch} volume={this.state.volume} isPlaying={this.state.isPlaying} uploadedSong={this.state.uploadedSong}/>
                <button onClick={this.onPlayPress}>{this.state.buttonText}</button>
                <br/>
                <label>Volume</label>
                <input type="range" name="volume" value={this.state.volume}  min="0.0"  max="1.0" step="0.1" onChange={this.onVolumeChange}/>
                <br/>
                <input type="file" name="file" onChange={this.onFileUpload}/>
            </div>
        );
    }
}

export default App;
