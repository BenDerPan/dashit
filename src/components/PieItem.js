import React, { Component } from "react";
import { Heading, Button, Line, Row, Col, Project, Frame, Words } from '@arwes/arwes';
import createG2 from 'g2-react';
import { Stat } from 'g2';

const ChartPie = createG2(chart => {
  chart.coord('theta');
  chart.intervalStack().position(Stat.summary.proportion()).color('cut');
  chart.render();
});

const piedata=[{
  "name": 14513,
  "carat": 1.35,
  "cut": "Ideal",
  "color": "J",
  "clarity": "VS2",
  "depth": 61.4,
  "table": 57,
  "price": 5862,
  "x": 7.1,
  "y": 7.13,
  "z": 4.37
}, {
  "name": 28685,
  "carat": 0.3,
  "cut": "Good",
  "color": "G",
  "clarity": "VVS1",
  "depth": 64,
  "table": 57,
  "price": 678,
  "x": 4.23,
  "y": 4.27,
  "z": 2.72
}, {
  "name": 50368,
  "carat": 0.75,
  "cut": "Ideal",
  "color": "F",
  "clarity": "SI2",
  "depth": 59.2,
  "table": 60,
  "price": 2248,
  "x": 5.87,
  "y": 5.92,
  "z": 3.49
}, {
  "name": 7721,
  "carat": 0.26,
  "cut": "Ideal",
  "color": "F",
  "clarity": "VS1",
  "depth": 60.9,
  "table": 57,
  "price": 580,
  "x": 4.13,
  "y": 4.11,
  "z": 2.51
}, {
  "name": 31082,
  "carat": 0.33,
  "cut": "Premium",
  "color": "H",
  "clarity": "VVS1",
  "depth": 61.4,
  "table": 59,
  "price": 752,
  "x": 4.42,
  "y": 4.44,
  "z": 2.72
}, {
  "name": 26429,
  "carat": 1.52,
  "cut": "Ideal",
  "color": "G",
  "clarity": "VVS1",
  "depth": 62.4,
  "table": 55,
  "price": 15959,
  "x": 7.3,
  "y": 7.39,
  "z": 4.58
}]

class PieItem extends Component{
  constructor(props){
    super(props);
    this.state =  {
      data: piedata.slice(0, piedata.length / 2 - 1),
      width: this.props.parentWidth,
      height: this.props.parentHeight,
      plotCfg: {
        margin: [10, 80, 5, 70],
      },
    };  
  }

  render(){
    return (
      <ChartPie
      data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          plotCfg={this.state.plotCfg}
          ref="myChart"
      />
    )};
}

export default PieItem;
