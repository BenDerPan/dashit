import React, { Component } from "react";
import {Image } from '@arwes/arwes';

class ImageItem extends Component{
  render(){
    return (
      <img src={this.props.viewData.src} alt="Loading..." style={{width:this.props.parentWidth,height:this.props.parentHeight}}>
      </img>
    )};
}

export default ImageItem;
