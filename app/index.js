'use strict'
import React from 'react'
import { HashRouter as Router } from 'react-router-dom';
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react';

import {store, persistor} from './store';
import Main from './components/main';


render (

  <Provider store={store}>
     <PersistGate persistor={persistor}>
      <Router>
        <Main />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('main')
)

