import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, Switch } from 'react-router';
import { Root } from './containers/Root';
import { SpellingApp } from './containers/SpellingApp';
import { RouterStore } from './stores';
import { STORE_SPELLING, STORE_ROUTER } from './constants/stores';


// enable MobX strict mode
useStrict(true);


// prepare MobX stores
const history = createBrowserHistory();
const routerStore = new RouterStore(history);
const rootStores = {
  [STORE_ROUTER]: routerStore
};

// render react DOM
ReactDOM.render(
  <Provider {...rootStores} >
    <Root>
      <Router history={history} >
        <Switch>
          <Route path="/" component={SpellingApp} />
        </Switch>
      </Router>
    </Root>
  </Provider >,
  document.getElementById('root')
);