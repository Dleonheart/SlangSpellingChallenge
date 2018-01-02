import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { STORE_SPELLING, STORE_APPSTATE } from '../../constants/stores';
import { SlangIntro } from '../../components/Intro';
import { TransitionGroup } from 'react-transition-group';


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
    
  }

  introFinished() {
    this.props[STORE_APPSTATE].introFinished();
  }

  renderIntro() {
    
    const shouldRenderIntro = this.props[STORE_APPSTATE].isIntroScene;
    if(shouldRenderIntro) {
      return (
      <SlangIntro introFinished={this.introFinished}>
        
      </SlangIntro>
      )
    }
  }

  render() {



    return (
      <div className={style.card}>
        <TransitionGroup component="span">
          {this.renderIntro()}
        </TransitionGroup>
      </div>
    );
  }
};
