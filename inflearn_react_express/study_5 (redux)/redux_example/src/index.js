import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import reducers from './reducers/index'
import * as action from './actions/ActionIndex'
import { Provider } from 'react-redux'


const store = createStore(reducers);

// subscribe: 스토어에 state 가 변경될때마다 실행된다.
// subscribe 의 반환형은 unsubscribe이기 떄문에 반환형을 실행해주면 notify가 멈춘다.
//store.subscribe(()=>{console.log('변경')})   // 기본형 주석

const unSubscribe = store.subscribe(()=>{console.log('변경')});

console.log(store.getState()) // 스토어에 현재상태를 볼수있음.

// store.dispatch(action.decrement());
// store.dispatch(action.increament());
// store.dispatch(action.decrement());

unSubscribe();

// store.dispatch(action.decrement()); //unSubscribe 이후로는 notify가 튀지 않는다.


ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
