import React, { Component } from "react"
import { Router, Switch, Route } from "react-router-dom"
import App from "./App"
import history from './history'
import Dev from './component/Dev'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/Dev" component={Dev} />
                </Switch>
            </Router>
        )
    }
}