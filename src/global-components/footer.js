import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CompanyLogo from '../images/vip_tech.jpg'; 
import '../components/inner-component/css/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer-info">
                        <div className="logo">
                        <Link to="/"><img src={CompanyLogo} alt="logo" /></Link>
                </div>
            </div>
            <div className="term-privacy">
            <div className="links-div">
                <ul>
                    <li><a href="/terms-of-service">Terms</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
                <span>© 2018 Vip Tech Corporation</span>
            </div>
            <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
                        </div>
                    </div>
                    )
                }
            }
            
export default Footer;