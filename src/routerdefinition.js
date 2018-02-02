import React, { Component } from 'react';
import { browserHistory, Router, Route } from 'react-router'

import ShopSelector from './pages/shopselector'
import Shop from './pages/shop'

class RouterDefinition extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={ShopSelector} />
                <Route path="/bochor" component={Shop} codename="bochor" />
                <Route path="/kokory" component={Shop} codename="kokory" />
            </Router>
        );
    }
}

export default RouterDefinition;