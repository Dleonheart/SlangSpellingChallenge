import * as React from 'react';
import * as style from './style.css';
import { TweenMax, TimelineMax, Back, Expo } from 'gsap';

export interface AudioComponentProps {
    audioSource : any;
}

export class AudioComponent extends React.Component<AudioComponentProps, {}> {

    
  constructor(props:any, context: any) {
    super(props, context);
    this.playSound = this.playSound.bind(this);
  }

  private audio: HTMLAudioElement;
  private root: HTMLElement;


  componentDidMount() {
    TweenMax.set(this.root, { transformOrigin: 'center center' });
    TweenMax.from(this.root, .5, {
        scale: 0,
        ease: Back.easeOut,
        delay: .7,
        onComplete: this.playSound
    })
    
  }

  playSound() {
    TweenMax.to(this.root, .15, {
        scale: 0.8,
        yoyo:true,
        repeat: 1
    });
    this.audio.play();
  }

  

  render() {
    return (
      <button className={style.audioButton} onClick={ this.playSound } ref={ (root) => this.root = root }>
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
