import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import App from './../../App';
import Home from './../Home/Home'
import AngularComponent from '../Angular/Angular';
import ReactComponent from '../React/React';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return( <Router>
                    <div>
                        <Route path="/" component={Home}></Route>
                        <Route path="/angular" component={AngularComponent}></Route>
                        <Route path="/react" component={ReactComponent}></Route>
                    </div>
                </Router>);
    }
}

export default MainContainer;

