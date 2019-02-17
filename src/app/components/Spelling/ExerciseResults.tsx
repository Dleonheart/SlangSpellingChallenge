import * as React from 'react';
import * as style from './style.css';
import { TweenMax, TimelineMax, Expo } from 'gsap';

export interface ExerciseResultProps {
    answer: string;
    result: string;
    isCorrect: Boolean;
    onClick: (index:any) => void;
}

export class ExerciseResults extends React.Component<ExerciseResultProps, {}> {

  constructor(props:ExerciseResultProps) {
    super(props);
    this.renderSuccesIcon = this.renderSuccesIcon.bind(this);
    this.renderFailIcon = this.renderFailIcon.bind(this);
    this.addAnimTargetRef = this.addAnimTargetRef.bind(this);
  }

  private animTargets: Node[] = [];
  
  componentDidMount() {
    TweenMax.staggerFrom(this.animTargets, 1, {
        y:20,
        alpha:0,
        ease: Expo.easeOut
    }, 0.15);
  }

  addAnimTargetRef(ref: Node) {
    this.animTargets.push(ref);
  }

  renderSuccesIcon() {
    return (
        <div className={style.icon}>
          <svg ref={this.addAnimTargetRef} viewBox="0 0 499.632 499.632"><path fill="#ffa64d" d="M417.816 137.816l-64 72h32v216l64 48v-264h32zM17.816 265.816h32v208l64-48v-160h32l-64-72z"/><path d="M399.352 426.168c-23.952-17.304-50.328-29.968-78.096-38.048l-15.44-146.728v-79.6a95.89 95.89 0 0 0 86.208-58.168l23.2-54.136a31.525 31.525 0 0 0 2.592-12.6v-3.072c0-17.648-14.352-32-32-32a31.911 31.911 0 0 0-29.536 19.688l-21.536 51.688c-6.24 14.96-20.736 24.624-36.928 24.624h-12.32c7.632-8.504 12.32-19.696 12.32-32v-16c0-26.472-21.528-48-48-48s-48 21.528-48 48v16c0 12.304 4.688 23.496 12.32 32h-12.32c-16.192 0-30.688-9.664-36.92-24.616L143.36 21.512c-4.992-11.968-16.584-19.696-29.544-19.696-17.648 0-32 14.352-32 32v3.072c0 4.36.864 8.608 2.584 12.608l23.2 54.136a95.902 95.902 0 0 0 86.208 58.168v79.6l-15.44 146.728c-27.768 8.08-54.144 20.752-78.096 38.048l-77.048 55.64H1.816v16h496v-16h-21.408l-77.056-55.648zM371.04 27.664a15.96 15.96 0 0 1 14.776-9.848c8.824 0 16 7.176 16 16v3.072c0 2.184-.44 4.304-1.288 6.304l-16.056 37.472-30.432-12.176 17-40.824zM217.816 65.816v-16c0-17.648 14.352-32 32-32s32 14.352 32 32v16c0 17.648-14.352 32-32 32s-32-14.352-32-32zM99.104 43.192c-.848-2-1.288-4.12-1.288-6.304v-3.072c0-8.824 7.176-16 16-16a15.96 15.96 0 0 1 14.776 9.848L145.6 68.488l-30.432 12.176-16.064-37.472zm23.208 54.136l-.84-1.96 30.576-12.232c9.504 18.72 28.52 30.68 49.768 30.68h96c21.248 0 40.264-11.96 49.768-30.672l30.576 12.232-.84 1.96a79.907 79.907 0 0 1-73.528 48.48h-13.976v64h-80.032l.032-64H195.84a79.902 79.902 0 0 1-73.528-48.488zm87.456 145.32l.008-16.832h80.04v16l14.912 142.048c-10.304-2.256-20.76-3.904-31.352-4.872l-8.072-121.176h-30.968L226.256 379a254.683 254.683 0 0 0-31.344 4.872l14.856-141.224zm47.512 135.456c-2.488-.072-4.96-.288-7.464-.288s-4.976.216-7.464.288l6.952-104.288h1.032l6.944 104.288zm-147.632 61.04c41.048-29.656 89.52-45.328 140.168-45.328s99.12 15.672 140.168 45.328l59.088 42.672H50.56l59.088-42.672z" fill="#333"/><path fill="#333" d="M377.816 377.816h16v16h-16zM377.816 281.816h16v80h-16zM457.816 217.816h41.816l-81.816-92.04L336 217.816h41.816v48h16v-64h-22.184l46.184-51.96L464 201.816h-22.184v80h16zM41.816 361.816h16v80h-16zM41.816 345.816h16v-88H35.632l46.184-51.96L128 257.816h-22.184v104h16v-88h41.816l-81.816-92.04L0 273.816h41.816zM105.816 377.816h16v16h-16zM441.816 297.816h16v144h-16zM145.816 441.816h16v16h-16zM241.816 409.816h16v16h-16zM265.816 441.816h16v16h-16zM329.816 425.816h16v16h-16zM361.816 457.816h16v16h-16zM185.816 457.816h16v16h-16z"/></svg>
          <h1 ref={this.addAnimTargetRef} className={style.keepTryring}>Excellent, keep it up !</h1>
          <button onClick={this.props.onClick} 
              ref={this.addAnimTargetRef} 
              className={[style.button, style.buttonGreen, style.buttonSmall].join(' ')}>
              Again !
          </button>
        </div>
    )
  }

  renderFailIcon() {
    return (
       <div className={style.icon}>
            <svg ref={this.addAnimTargetRef} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" data-ember-extension="1"><path fill="none" stroke="#4d5152" strokeLinejoin="round" strokeWidth="2" d="M53 22v6M25 28H4a3 3 0 0 1 0-6h21M41 22h17l5 3-5 3H41M11 22v6M7 22v6"/><path d="M38 44v-2l3-10V22a2 2 0 0 0-4 0v-1a2 2 0 0 0-4 0v-2a2 2 0 0 0-4 0v2a2 2 0 0 0-4 0v9M29 21v2M33 21v2M37 22v1M21 28v4l2 4 3 4v4M30 48h-2" fill="none" stroke="#4d5152" strokeMiterlimit="10" strokeWidth="2"/><path d="M25 64V45a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v19" fill="none" stroke="#4d5152" strokeLinejoin="round" strokeWidth="2"/><path fill="none" stroke="#4d5152" strokeMiterlimit="10" strokeWidth="2" d="M43 64v-2M43 60v-2M43 56v-2M21 64v-2M21 60v-2M21 56v-2"/><path d="M17.94 51.05A27 27 0 0 1 5.16 30.94M58.84 31A27 27 0 0 1 46.2 51M6.61 18.81a27 27 0 0 1 50.78 0" fill="none" stroke="#fd692f" strokeMiterlimit="10" strokeWidth="2"/></svg>        
            <h1 ref={this.addAnimTargetRef} className={style.keepTryring}>Practice makes perfect, keep trying !</h1>
            <button onClick={this.props.onClick} 
              ref={this.addAnimTargetRef} 
              className={[style.button, style.buttonGreen, style.buttonSmall].join(' ')}>
              Again !
            </button>
        </div>
    );
  }

  render() {
    return (
        <div className={style.resultContainer}>
            { this.props.isCorrect && this.renderSuccesIcon() }
            { !this.props.isCorrect && this.renderFailIcon() }
            { !this.props.isCorrect && (<div className={style.resultsComparison}>
              <p ref={this.addAnimTargetRef}>
                <span className={style.rightsHeading}>Your anwer:</span>  
                <span>{this.props.answer}</span>
              </p>
              <p ref={this.addAnimTargetRef}>
                <span className={style.wrongsHeading}>Correct answer:</span>  
                <span>{this.props.result}</span>
              </p>
            </div>)}
        </div>
    );
  }
};
