import React, { Component } from 'react';
import BannerImage from '../../images/mejores-tarifas-convergentes-enero-2016.jpg';
import BannerImage2 from '../../images/newitem.jpg';
import BannerImage3 from '../../images/item.jpg';

import './css/banner.css';

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentCount: 0
        }
      }
      timer() {
        let listItem = document.querySelectorAll('.bg-img');
        let item = document.querySelector('.active');
        var i=0;
        item.classList.remove('active');
        setTimeout(function(){
            listItem[0].style.transform="";
        },100)
        
        for (i; i < listItem.length; i++) {
            if (listItem[i] === item){
                if(i === listItem.length - 1){
                    listItem[0].classList.add('active');
                }
                else{
                    
                    item.nextSibling.classList.add('active');
                }
                if(i==listItem.length - 2){
                    setTimeout(function(){
                    listItem[0].style.transform="scale(0.8)";
                    },150);
                }
            }  
          }
      }
      componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 11000);
      }
      componentWillUnmount(){
        clearInterval(this.intervalId);
      }
      
    render() {
        return (
            <div className="banner-with-video">
                <div className="item">
                <div className="bg-img active">
                    <img src={BannerImage2} alt="banner"/>
                </div>
                <div className="bg-img">
                    <img src={BannerImage} alt="banner"/>
                </div>
                <div className="bg-img">
                    <img src={BannerImage3} alt="banner"/>
                </div>
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