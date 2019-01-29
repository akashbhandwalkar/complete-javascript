import React from 'react';
import './Header.scss'
import config from './../../utils/config';
console.log(config);
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            syllabusMenu: '',
            showHeaderMenu: false
        }
    }

    toggleSyllabusMenu = () => {
        this.setState({
            syllabusMenu: this.state.syllabusMenu ? '' : 'show'
        })
    }

    toggleHeaderMenu = () => {
        console.log('toggleHeaderMenu', this.state);
        this.setState({
            showHeaderMenu: !this.state.showHeaderMenu
        });
    }
    render() {
        const { syllabusMenu, showHeaderMenu } = this.state;
        return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">JavaScript Playground</a>
                <button 
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={this.toggleHeaderMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${showHeaderMenu ? '' : 'navbar-collapse collapse'}`} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link">Practice Questions <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Challenges</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link cursor-pointer dropdown-toggle"
                            onClick={this.toggleSyllabusMenu}
                            role="button" data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        Dropdown
                        </a>
                        <div className={`dropdown-menu ${syllabusMenu}`}  aria-labelledby="navbarDropdown">
                        {
                            config && config.syllabus &&
                                config.syllabus.map( (syllabus) => {
                                    return(<a className="dropdown-item"> {syllabus.name}</a>)
                                })
                        }
                        
                        
                        </div>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </nav>)
    }
}

export default Header;