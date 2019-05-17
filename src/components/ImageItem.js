import React, { Component } from "react";
import { Heading, Button, Line, Row, Col, Project, Frame, Words, Image } from '@arwes/arwes';

class ImageItem extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return (
      <Image animate resources='/static/img/default.jpg'>
                默认图片
      </Image>
    )};
}

export default ImageItem;
