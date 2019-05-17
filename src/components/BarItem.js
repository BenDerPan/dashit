import React, { Component } from "react";
import { Heading, Button, Line, Row, Col, Project, Frame, Words } from '@arwes/arwes';
import createG2 from 'g2-react';
import {Stat} from 'g2';

const data = [{
  year: '1951 年',
  sales: 38
}, {
  year: '1952 年',
  sales: 52
}, {
  year: '1956 年',
  sales: 61
}, {
  year: '1957 年',
  sales: 145
}, {
  year: '1958 年',
  sales: 48
}, {
  year: '1959 年',
  sales: 38
}, {
  year: '1960 年',
  sales: 38
}, {
  year: '1962 年',
  sales: 38
}];


const Bar=createG2(chart=>{
  chart.interval().position('year*sales');
  chart.render();
})
class BarItem extends Component{
  constructor(props){
    super(props);
    this.state={
      data: data,
      width: this.props.parentWidth,
      height: this.props.parentHeight,
      plotCfg: {
        margin: [80, 80, 50, 80],
      },
    };
  }
  render(){
    return (
      <Bar
      data={this.state.data}
      width={this.state.width}
      height={this.state.height}
      plotCfg={this.plotCfg}
      />
    )};
}

export default BarItem;
