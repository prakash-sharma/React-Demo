import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CompanyLogo from '../images/vip_tech.jpg';    

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="company-logo">
                        <Link to="/"><img src={CompanyLogo} alt="logo" /></Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/signup" className="btn-default btn-orange"><span>signup</span></Link>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;