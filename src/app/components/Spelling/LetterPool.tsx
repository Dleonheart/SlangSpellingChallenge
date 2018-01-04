import * as React from 'react';
import * as style from './style.css';
import { TweenMax, TimelineMax, Back, Expo } from 'gsap';

export interface LetterPoolProps {
    letterPool : Array<String>;
}

export class LetterPool extends React.Component<LetterPoolProps, {}> {
  
  constructor(props:any, context: any) {
    super(props, context);    
  }

  private tl : TimelineMax;
  
  
  buildTimeline(done) {
    this.tl = new TimelineMax({paused: true, onComplete: () => {
        done();
    }});
    // insert intro animation timeline here
    this.tl.play();

  }

  componentDidMount() {
    
  }

  renderLetters() {
    const { letterPool } = this.props;

    return letterPool.map((letter, index) => {
      return (
        <li className={style.letter} key={index} >{letter}</li>
      )
    });
  }

  render() {
    return (
      <ul className={style.letterPoolContainer}>
        {this.renderLetters()}
      </ul>
    );
  }
};
