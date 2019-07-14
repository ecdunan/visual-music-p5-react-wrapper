import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import mist from './mist.mp3';

export default function sketch(p) {
    let song;
    let amplitude;
    let volume;
    let isPlaying = false;

    p.preload = function() {
      song = p.loadSound(mist);
    }

    p.setup = function () {
      p.createCanvas(200, 200);
      amplitude = new p5.Amplitude();
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      volume = props.volume;
      isPlaying = props.isPlaying;

      if(song) {
        if (isPlaying && !song.isPlaying()) {
          song.play();
        } else if(!isPlaying && song.isPlaying()) {
          song.pause();
        }
      }
   }

    p.togglePlaying = function(song) {
       isPlaying ? song.play() : song.pause();
    }

    p.draw =function () {
      p.background(51);

      let songVolume = amplitude.getLevel();
      let ellipseDiameter = p.map(songVolume, 0, 1, 10, 200); // you need the map() in order to get a big enough ellipse

      song.setVolume(parseFloat(volume));

      p.fill(255,0,255);
      p.ellipse(p.width/2, p.height/2, ellipseDiameter, ellipseDiameter);
    }
};