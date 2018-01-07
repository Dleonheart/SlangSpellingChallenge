import * as React from 'react';
import * as style from './style.css';
import { observer } from 'mobx-react';
import { TweenMax, TimelineMax, Back, Expo } from 'gsap';

export interface SpellingInputProps {
    spellingResult: string;
    onChange: Function;
}

@observer
export class SpellingInput extends React.Component<SpellingInputProps, {}> {
  
  constructor(props:any, context: any) {
    super(props, context);
    this.onChange = this.onChange.bind(this);
        
  }

  private input : any;
  
  componentDidMount() {
    this.input.focus();
  }

  onChange(event) {
    this.props.onChange(event.target.value);
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
