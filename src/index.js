import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux'; // create globalise state store


//Action increment
const  increment =()=>{
    return{
        type:'INCREMENT'
    }
}

const  decrement =()=>{
    return{
        type:'DECREMENT'
    }
}

//Reducer

const counter = (state = 5 ,action) => {
    switch(action.type){
        case "INCREMENT":
        return state + 1;
        case "DECREMENT":
        return state - 1
        
    }
};

let store = createStore(counter);

store.subscribe(()=>{
    console.log ( "Count is ", store.getState());
})

//dispatch

store.dispatch(increment());



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
