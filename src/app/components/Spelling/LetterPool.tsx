import * as React from 'react';
import * as style from './style.css';
import { observer } from 'mobx-react';
import { TweenMax, TimelineMax, Back, Expo } from 'gsap';

export interface LetterPoolProps {
    letterPool : Array<{letter: string, isUsed:boolean}>;
    onClick: (index:any, remove:boolean) => void;
}

@observer
export class LetterPool extends React.Component<LetterPoolProps, {}> {
  
  constructor(props:any, context: any) {
    super(props, context);    
  }

  private tl : TimelineMax;
  private letterList: HTMLUListElement;


  componentDidMount() {
    TweenMax.staggerFrom(this.letterList.children, .5, {y: 5, alpha: 0, ease: Back.easeOut, clearProps:'transform'}, .05);
  }

  renderLetters() {
    const { letterPool } = this.props;

    return letterPool.map((letterObject, index) => {
      const classNames  = [
        style.letter
      ];
      letterObject.isUsed && classNames.push(style.used);
      return (
        <li className={classNames.join(' ')} 
            key={index} 
            onClick={() => this.props.onClick(index, letterObject.isUsed)} >
            {letterObject.letter}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className={style.letterPoolContainer} ref={(letterList)=> {this.letterList = letterList}}>
        {this.renderLetters()}
      </ul>
    );
  }
};
