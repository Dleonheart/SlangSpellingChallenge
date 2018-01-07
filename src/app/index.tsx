import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Root } from './containers/Root';
import { SpellingApp } from './containers/SpellingApp';
import { STORE_SPELLING, STORE_APPSTATE } from './constants/stores';
import { AppStateStore, SpellingDataStore } from './stores';
import { SpellingApi } from './api/SpellingApi';


// enable MobX strict mode
useStrict(true);


// prepare MobX stores
const appStateStore = new AppStateStore();
const spellingDataStore = new SpellingDataStore(new SpellingApi);

const rootStores = {
  [STORE_APPSTATE]: appStateStore,
  [STORE_SPELLING]: spellingDataStore
};

// render react DOM
ReactDOM.render(
  <Provider {...rootStores}>
    <Root>
      <SpellingApp></SpellingApp>
    </Root>
  </Provider>,
  document.getElementById('root')
);