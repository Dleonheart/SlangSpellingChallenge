import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { RouterStore } from '../../stores';
import { STORE_SPELLING, STORE_ROUTER } from '../../constants/stores';


export interface SpellingAppProps extends RouteComponentProps<any> {
  /** MobX Stores will be injected via @inject() **/
  // [STORE_ROUTER]: RouterStore;
  // [STOURE_Spelling]: SpellingAppStore;
}

export interface SpellingAppState {
  
}

@inject(STORE_ROUTER)
@observer
export class SpellingApp extends React.Component<SpellingAppProps, SpellingAppState> {

  constructor(props: SpellingAppProps, context: any) {
    super(props, context);
    
  }

  render() {

    return (
      <div className={style.normal} >
      <h1>Hello world</h1>
        
      </div>
    );
  }
};
