import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Root } from './containers/Root';
import { SpellingApp } from './containers/SpellingApp';
import { STORE_SPELLING, STORE_APPSTATE } from './constants/stores';
import { AppStateStore } from './stores';


// enable MobX strict mode
useStrict(true);


// prepare MobX stores
const history = createBrowserHistory();
const appStateStore = new AppStateStore();

const rootStores = {
  [STORE_APPSTATE]: appStateStore
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