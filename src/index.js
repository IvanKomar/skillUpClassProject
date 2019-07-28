import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/rootReducer';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) 
// reducer - функция яка буде знати як змінювати стейт
// в createStore потрібно передати reducer productLikeReducer на базі попереднього стейту та екшну
// компонент якому потрібно брати дані зі сховища потрібно підключити за допомогою функції connect
// В реакті є метод context подібний до redux

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
