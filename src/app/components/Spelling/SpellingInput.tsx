import * as React from 'react';
import * as style from './style.css';
import { observer } from 'mobx-react';
import { TweenMax, TimelineMax, Back, Expo } from 'gsap';

export interface SpellingInputProps {
    spellingResult: any;
    onChange: Function;
}


export class SpellingInput extends React.Component<SpellingInputProps, {}> {
  
  constructor(props:any, context: any) {
    super(props, context);
    this.onChange = this.onChange.bind(this);
        
  }

  private tl : TimelineMax;
  private input : any;
  
  
  buildTimeline(done) {
    this.tl = new TimelineMax({paused: true, onComplete: () => {
        done();
    }});
    // insert intro animation timeline here
    this.tl.play();

  }

  componentDidMount() {
    
  }

  onChange(event) {
    this.onChange(event.value);
  }

  render() {
    return (
      <div className={style.inputContainer}>
        <input ref={(input) => this.input = input} 
               type="text" 
               value={this.props.spellingResult}
               onChange={this.onChange} />
      </div>
    );
  }
};
