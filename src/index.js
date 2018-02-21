import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './redux/store';
import Reducer from './redux/reducers';
import './index.css';
import App from './App';


ReactDOM.render(<Provider store={Store(Reducer)}><App /></Provider>, document.getElementById('root'));
