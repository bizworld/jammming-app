import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // use this and or line 6
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App'; // OR import App from './components/App/App.js';
import './components/App/App.css'; // may not be needed


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
