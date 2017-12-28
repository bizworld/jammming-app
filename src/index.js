import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // either this or line 6
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App'; // OR import App from './components/App/App.js';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
