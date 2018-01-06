import * as React from 'react';
import * as style from './style.css';
import { TweenMax, TimelineMax, Back, Expo } from 'gsap';

export interface AudioComponentProps {
    audioSource : any;
}

export class AudioComponent extends React.Component<AudioComponentProps, {}> {

    
  constructor(props:any, context: any) {
    super(props, context);    
  }

  private audio: any;

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

  

  render() {
    return (
      <button className={style.audioButton} onClick={()=>this.audio.play()}>
       <audio  ref={ audio => this.audio = audio } src={ this.props.audioSource }></audio>
        <div className={style.playIconContainer}>
            <svg width="37px" height="41px" viewBox="0 0 37 41">
                <g id="Desktop-HD" stroke="none" fill="none" transform="translate(-587.000000, -503.000000)">
                    <g id="Group" transform="translate(529.000000, 454.000000)" fill="#00CA96">
                        <g id="play-button" transform="translate(28.000000, 27.000000)">
                            <polygon id="Triangle" points="67 42.5 30 63 30 22"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
      </button>
    );
  }
};
