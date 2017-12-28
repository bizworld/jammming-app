import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // OR './App.js';
import registerServiceWorker from './registerServiceWorker';
import './components/App/App.js'; //import App from './components/App/App.js'; ?
import './components/App/App.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
