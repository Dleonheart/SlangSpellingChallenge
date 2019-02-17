import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { STORE_SPELLING } from '../../constants/stores';
import { SpellingDataStore } from '../../stores';
import { TweenMax, TimelineMax, Back, Expo } from 'gsap'
import { ProgressTracker, AudioComponent, LetterPool, SpellingInput, SpellingLoader, ExerciseResults } from './';


@inject(STORE_SPELLING)
@observer
export class SpellingExercise extends React.Component {

    
  constructor(props) {
    super(props);   
    this.updateSpelling = this.updateSpelling.bind(this);
    this.renderSpellingComponents = this.renderSpellingComponents.bind(this);
    this.renderExerciseResults = this.renderExerciseResults.bind(this);
    this.skipExercise = this.skipExercise.bind(this);
    this.sendExercise = this.sendExercise.bind(this);
    
    this.spellingData = this.props[STORE_SPELLING];
  }

  private spellingData : SpellingDataStore;

  componentDidMount() {
    this.spellingData.fetchExerciseData();
  }

  renderSpellingComponents() {
    return (
    <div className={style.spellingContainer}>
      <LetterPool {...this.spellingData} onClick={(index, remove) => this.spellingData.letterPoolToResult(index)}/>
      <SpellingInput {...this.spellingData} onChange={this.updateSpelling} />
      <div className={style.buttonsContainer}>
        <button className={[style.button, style.buttonGreen].join(' ')} disabled={!this.spellingData.spellingResult} onClick={this.sendExercise}>Send</button>
        <button className={[style.button, style.buttonRed].join(' ')} onClick={this.skipExercise}>Skip</button>
      </div>
    </div>
    );
  }

  renderExerciseResults() {
    return (
      <ExerciseResults { ...this.spellingData.resultData } onClick={() => this.spellingData.skipExercise()} />
    );
  }

  skipExercise() {
    this.spellingData.skipExercise();
  }

  sendExercise() {
    this.spellingData.submitResponse();
  }

  renderSpellingLoader() {
    return (
      <div className={style.spellingContainer}>
        <div className={style.spellingLoader}>
          <SpellingLoader />
        </div>
      </div>
    );
  }

  updateSpelling(result) {
    this.spellingData.setSpellingResult(result);
  }

  render() {
    return (
      <div className={style.exerciseContainer}>
        <ProgressTracker {...this.spellingData} />
        <AudioComponent {...this.spellingData} />
        { this.spellingData.showingExercise && this.renderSpellingComponents() }
        { this.spellingData.waiting && this.renderSpellingLoader() }
        { this.spellingData.showingResults && this.renderExerciseResults() }
      </div>
    );
  }
};
