import React, { Component } from "react";
import { Heading, Button, Line, Row, Col, Project, Frame, Words } from '@arwes/arwes';

class ListItem extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return (
      <Words>我是List组件</Words>
    )};
}

export default ListItem;
