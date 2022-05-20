import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logout from '../Auth/Logout';
import User from "../../auth/User";


class Nav extends Component {
    static displayName = Nav.name;

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: this.props.loggedIn,
        };
    }

    logOut = () => {
        this.props.logOutApp();
    }

    render() {
        const pages = this.props.pages;
        const loggedIn = this.props.loggedIn;
        return (
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="row w-100 justify-content-between">
                            <ul className="navbar-nav col-md-8">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Projects">Projects</Link>
                                </li>
                                {pages ? pages.map((page, index) => 
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link" to={'/' + page.title}>{page.title}</Link>
                                    </li>
                                ):<></>}
                                <li>
                                    {loggedIn ? 
                                    <Link to="/AddPage">
                                    <i className="icon pl-2 fa-solid fa-plus fa-3x"></i>
                                    </Link> :
                                    <></>}
                                </li>
                            </ul>
                            <div className="col-md-2 pt-2">
                                {loggedIn ? <Logout logOutNav={this.logOut} /> : <></>}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Nav;
