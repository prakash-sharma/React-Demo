import React, { Component } from 'react';
import BannerThird from '../inner-component/banner-third-level';
import CtaGrid from '../inner-component/cta-with-grid';
class Blog extends Component {
  constructor(props){
    super(props);
    document.title = this.props.title;    
  }
  render() {
    return (
      <div className="App">
        <BannerThird title="Blog Landing"/>
        <CtaGrid/>
      </div>
    );
  }
}

export default Blog;