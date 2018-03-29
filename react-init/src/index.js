import React,{Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import Layout from "./container/layout";
import IndexItem from "./components/index-item";
import New from "./components/new";
import Description from "./components/description";

import './index.less';

const loggerMiddleware = createLogger()

let store = createStore(reducers, applyMiddleware(
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
))

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={IndexItem} />
                <Route path="new" component={New} />
                <Route path="desc/:id" component={Description} />
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
