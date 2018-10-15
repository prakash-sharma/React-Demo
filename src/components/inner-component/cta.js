import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './css/cta.css';

class Cta extends Component {
    render() {
        return (
            <div className="cta bg-pattern">
                <div className="inner-wrap">
                    <div className="container">
                        <div className="col">
                            <h3>Get Your Insight</h3>
                            <p>We've got an at-home vision solution just for you.</p>
                            <div className="button">
                                <Link to="/signup" className="btn-default"><span>Shop</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cta;