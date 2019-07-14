import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import mist from './mist.mp3';

export default function sketch(p) {
    let song;
    let button;
    let amplitude;
    let volume;

    /*
      Ensures that the sound is loaded before setup
    */
    p.preload = function() {
      song = p.loadSound(mist);
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.volume){
      volume = props.volume;
    }
  };

    p.setup = function () {
      p.createCanvas(200, 200);
      p.loaded();
      amplitude = new p5.Amplitude();
    }

    p.loaded = function () {
      button = p.createButton("play");
      button.mousePressed(p.togglePlaying);
    }

    p.togglePlaying = function () {
      if (!song.isPlaying()) {
        song.play();
        button.html("pause");
      } else {
        song.pause();
        button.html("play");
      }
    }

    p.draw =function () {
      p.background(51);

      let songVolume = amplitude.getLevel();
      let ellipseDiameter = p.map(songVolume, 0, 1, 10, 200); // you need the map() in order to get a big enough ellipse

      console.log(volume);
      song.setVolume(parseFloat(volume));

      p.fill(255,0,255);
      p.ellipse(p.width/2, p.height/2, ellipseDiameter, ellipseDiameter);
    }
};