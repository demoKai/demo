import React,{Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

import { Router, Route, hashHistory, Link} from 'react-router';

import App from "./container/App";
import "./index.less";

const loggerMiddleware = createLogger()

let store = createStore(reducers, applyMiddleware(
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
))


render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('root')
);