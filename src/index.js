import React from 'react';
import ReactDOM from 'react-dom';

// import * as serviceWorker from './serviceWorker';
// styles
import 'bootstrap/scss/bootstrap.scss';
import 'assets/scss/paper-kit.scss?v=1.3.0';
import 'assets/demo/demo.css?v=1.3.0';

import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';

// import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
