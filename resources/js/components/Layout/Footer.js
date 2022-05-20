import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    static displayName = Footer.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <span className="my-1 py-2">&copy; 2022 Stefan Whittaker-Lee</span>
                        <Link className="nav-link"to="/Login">Admin Login</Link>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
