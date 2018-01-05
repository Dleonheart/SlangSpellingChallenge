import * as React from 'react';
import * as style from './style.css';
import { observer } from 'mobx-react';
import { TweenMax, TimelineMax, Back, Expo } from 'gsap'
import { ProgressTracker, AudioComponent, LetterPool, SpellingInput } from './';



@observer
export class SpellingExercise extends React.Component<{}, {}> {

    
  constructor(props:any, context: any) {
    super(props, context);   
    this.updateSpelling = this.updateSpelling.bind(this);
  }

  private tl : TimelineMax;
  private logoSegments : HTMLCollection;
  

  buildTimeline(done) {
    this.tl = new TimelineMax({paused: true, onComplete: () => {
        done();
    }});
    // insert intro animation timeline here
    this.tl.play();

  }

  updateSpelling() {

  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className={style.exerciseContainer}>
        <ProgressTracker />
        <AudioComponent source="https://s3.amazonaws.com/lengio-development/sounds/8017fa443b55ba9b89aadbd688093ba3c67a7e9e/original.mp3" />
        <div className={style.spellingContainer}>
        <LetterPool letterPool={['a','t','h','e','t','o','r','e','i','c','l','e','t','o','r','e','i','c','l']} />
        <SpellingInput spellingResult="Jeronimo" onChange={this.updateSpelling} />
        <div className={style.buttonsContainer}>
          <button className={[style.button, style.buttonGreen].join(' ')}>Send</button>
          <button className={[style.button, style.buttonRed].join(' ')}>Skip</button>
        </div>
        </div>
      </div>
    );
  }
};
