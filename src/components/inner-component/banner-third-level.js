import React, { Component } from 'react';
import './css/banner-third-level.css';
import egovBanner from '../../images/egov-banner-1.jpg';
class BannerThird extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="no-padding banner-third-level ">
                <div className="bg-img">
                    <img src={egovBanner} alt="Partner Detail Background Image" />
                </div>
                <div className="v-middle-wrapper">
                    <div className="v-middle-inner container">
                        <div className="v-middle">
                            <div className="content text-left half-width-content">
                                <h2>{this.props.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerThird;