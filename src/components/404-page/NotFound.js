import React, { Component } from 'react';
import BannerThird from '../inner-component/banner-third-level';
import { basename } from 'path';
class NotFound extends Component {
  constructor(props){
    super(props);
    document.title = this.props.title;
  }
  render() {
    return (
      <div>
          <BannerThird title="404 Page"/>
      </div>
    );
  }
}



export default NotFound;
