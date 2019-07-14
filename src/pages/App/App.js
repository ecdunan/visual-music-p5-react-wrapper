import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../vendor/sketches/sketch';
import './App.css';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            stateSketch: sketch,
            volume: 0.5
        }
    }

    onVolumeChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <P5Wrapper sketch={this.state.stateSketch} volume={this.state.volume}/>
                <input type="range" name="volume" value={this.state.volume}  min="0.0"  max="1.0" step="0.1" onChange={this.onVolumeChange}/>
                <label>Volume</label>
                {/*<button onClick={this.pressEvent.bind(this)}>Change Sketch</button>*/}
            </div>
        );
    }
}

export default App;
