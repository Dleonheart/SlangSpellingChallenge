import * as React from 'react';
import * as style from './style.css';
import { observer } from 'mobx-react';
import { TweenMax, TimelineMax, Back, Expo } from 'gsap'
import { ProgressTracker } from './';



@observer
export class SpellingExercise extends React.Component<{}, {}> {

    
  constructor(props:any, context: any) {
    super(props, context);    
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

  componentDidMount() {
    
  }

  

  render() {
    return (
      <div className={style.exerciseContainer}>
        <ProgressTracker />
      </div>
    );
  }
};
