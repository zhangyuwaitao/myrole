import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//全局引入antd.css样式
import 'antd/dist/antd.css'
//全局引入store
import store from './store'
//引入mobx-react
import {Provider} from "mobx-react";

ReactDOM.render(
  // <React.StrictMode>
    <Provider {...store}>
        <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
