import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { STORE_SPELLING } from '../../constants/stores';
import { SpellingDataStore } from '../../stores';
import { TweenMax, TimelineMax, Back, Expo } from 'gsap'
import { ProgressTracker, AudioComponent, LetterPool, SpellingInput } from './';


@inject(STORE_SPELLING)
@observer
export class SpellingExercise extends React.Component<{}, {}> {

    
  constructor(props:any, context: any) {
    super(props, context);   
    this.updateSpelling = this.updateSpelling.bind(this);
    this.spellingData = this.props[STORE_SPELLING];
  }

  private tl : TimelineMax;
  private logoSegments : HTMLCollection;
  private spellingData : SpellingDataStore;
  

  buildTimeline(done) {
    this.tl = new TimelineMax({paused: true, onComplete: () => {
        done();
    }});
    // insert intro animation timeline here
    this.tl.play();

  }

  updateSpelling(value) {

  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className={style.exerciseContainer}>
        <ProgressTracker {...this.spellingData} />
        <AudioComponent {...this.spellingData} />
        <div className={style.spellingContainer}>
        <LetterPool {...this.spellingData} />
        <SpellingInput {...this.spellingData} onChange={this.updateSpelling} />
        <div className={style.buttonsContainer}>
          <button className={[style.button, style.buttonGreen].join(' ')}>Send</button>
          <button className={[style.button, style.buttonRed].join(' ')}>Skip</button>
        </div>
        </div>
      </div>
    );
  }
};
