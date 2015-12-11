import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import {renderDevTools} from '../utils/devTools';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';

import Home from '../components/Home.jsx';

require('../styles/app.scss');

const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store);

export default React.createClass({
  render() {
    return (
      <div>

        <Provider store={store}>
					<Router history={history}>
						<Route path="/" component={Home}>
						</Route>
					</Router>
        </Provider>

        { renderDevTools(store) }
      </div>
    );
  }
});
