import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { STORE_APPSTATE } from '../../constants/stores';
import { AppStateStore } from '../../stores';
import { SlangIntro, HelpMessage } from '../../components/Intro';
import { SpellingExercise } from '../../components/Spelling';

export interface SpellingAppProps {
 
}

export interface SpellingAppState {
  
}

@inject(STORE_APPSTATE)
@observer
export class SpellingApp extends React.Component<SpellingAppProps, SpellingAppState> {

  constructor(props: SpellingAppProps, context: any) {
    super(props, context);
    this.introFinished = this.introFinished.bind(this);
    this.helpMessageFinished = this.helpMessageFinished.bind(this);
    this.appState = this.props[STORE_APPSTATE];
    
  }

  private appState: AppStateStore

  introFinished() {
    this.appState.introFinished();
  }

  helpMessageFinished() {
    this.appState.helpMessageFinished();
  }

  renderIntro() {
    const shouldRenderIntro = this.appState.isIntroScene;
    if(shouldRenderIntro) {
      return (
      <SlangIntro introFinished={this.introFinished} />
      )
    } else return null
  }

  renderHelpMessage() {
    const shouldRenderHelpMessage = this.appState.isHelpMessageScene;
    if(shouldRenderHelpMessage) {
      return (
      <HelpMessage helpMessageFinished={this.helpMessageFinished} />
      )
    } else return null
  }

  renderSpellingExercise() {
    const shouldRenderExercise = this.appState.isExercise;
    if(shouldRenderExercise) {
      return (
      <SpellingExercise />
      )
    } else return null
  }

  render() {



    return (
      <div className={style.card}>
          {this.renderIntro()}
          {this.renderHelpMessage()}
          {this.renderSpellingExercise()}
      </div>
    );
  }
};
