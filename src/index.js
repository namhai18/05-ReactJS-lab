import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Tạo store lưu trữ
import {createStore} from "redux";
// Liên ket react va redux
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers/index"

// Ket noi store chứa và reducer
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

//Từ index.html > vào File index.js chạy đầu tiên, add componet APP vào root > App.js
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

