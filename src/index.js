import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import {Nav} from "./components/Nav"

const Root = () => (
    <Router>
        <React.Fragment>
        <Nav/>
        <Switch>
            <Route component={App} exact path="/" />
            <Route component={Signin} path="/signin" />
            <Route component={Signup} path="/signup" />
            <Route component={Checkout} path="/checkout" />
        </Switch>
        </React.Fragment>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
