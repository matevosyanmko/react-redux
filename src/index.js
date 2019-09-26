import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Provider from './store/configureStore';
import './index.css';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider children={<App />}></Provider>, document.getElementById('app'));
serviceWorker.unregister();
