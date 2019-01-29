import React from 'react';
import { connect } from 'react-redux';

import './Sidebar.scss';

class Sidebar extends React.Component {

    render() {
        console.log('props', this.props);
        return(

        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                        Start Bootstrap
                    </a>
                </li>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>)
    }
}

const mapStateToProps = state => ({
    config: state.configReducer
  });
  
  const mapDispatchToProps = dispatch => ({
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sidebar);

// subscribe to siderbarReducer