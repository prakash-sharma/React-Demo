import React, { Component } from 'react';
import BannerImage from '../../images/mejores-tarifas-convergentes-enero-2016.jpg';

import './css/banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="banner-with-video">
                <div className="bg-img">
                    <img src={BannerImage} alt="banner"/>
                </div>
                <div className="v-middle-wrapper">
                <div className="v-middle-inner container">
                 <div className="v-middle">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                 </div>
                </div>

                </div>
            </div>
        )
    }
}

export default Banner;