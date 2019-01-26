import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import App from './../../App';
import Home from './../Home/Home'

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return( <Router>
                    <Route path="/" component={Home}>
                    </Route>
                </Router>);
    }
}

export default MainContainer;