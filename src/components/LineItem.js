import React, { Component } from "react";
import { Heading, Button, Line, Row, Col, Project, Frame, Words } from '@arwes/arwes';
import createG2 from 'g2-react';
import {Stat} from 'g2';

const ChartLine = createG2(chart => {
  chart.line().position('time*price').color('name').shape('spline').size(2);
  chart.render();
});
const linedata=[
  {
    "time": "9/1",
    "price": 10,
    "name": "商品A"
  },
  {
    "time": "9/1",
    "price": 30,
    "name": "商品B"
  },
  {
    "time": "9/2",
    "price": 12,
    "name": "商品A"
  },
  {
    "time": "9/2",
    "price": 32,
    "name": "商品B"
  },
  {
    "time": "9/3",
    "price": 11,
    "name": "商品A"
  },
  {
    "time": "9/3",
    "price": 35,
    "name": "商品B"
  },
  {
    "time": "9/4",
    "price": 15,
    "name": "商品A"
  },
  {
    "time": "9/4",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/5",
    "price": 20,
    "name": "商品A"
  },
  {
    "time": "9/5",
    "price": 42,
    "name": "商品B"
  },
  {
    "time": "9/6",
    "price": 22,
    "name": "商品A"
  },
  {
    "time": "9/6",
    "price": 35,
    "name": "商品B"
  },
  {
    "time": "9/7",
    "price": 21,
    "name": "商品A"
  },
  {
    "time": "9/7",
    "price": 36,
    "name": "商品B"
  },
  {
    "time": "9/8",
    "price": 25,
    "name": "商品A"
  },
  {
    "time": "9/8",
    "price": 31,
    "name": "商品B"
  },
  {
    "time": "9/9",
    "price": 31,
    "name": "商品A"
  },
  {
    "time": "9/9",
    "price": 35,
    "name": "商品B"
  },
  {
    "time": "9/10",
    "price": 32,
    "name": "商品A"
  },
  {
    "time": "9/10",
    "price": 36,
    "name": "商品B"
  },
  {
    "time": "9/11",
    "price": 28,
    "name": "商品A"
  },
  {
    "time": "9/11",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/12",
    "price": 29,
    "name": "商品A"
  },
  {
    "time": "9/12",
    "price": 42,
    "name": "商品B"
  },
  {
    "time": "9/13",
    "price": 40,
    "name": "商品A"
  },
  {
    "time": "9/13",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/14",
    "price": 41,
    "name": "商品A"
  },
  {
    "time": "9/14",
    "price": 38,
    "name": "商品B"
  },
  {
    "time": "9/15",
    "price": 45,
    "name": "商品A"
  },
  {
    "time": "9/15",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/16",
    "price": 50,
    "name": "商品A"
  },
  {
    "time": "9/16",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/17",
    "price": 65,
    "name": "商品A"
  },
  {
    "time": "9/17",
    "price": 38,
    "name": "商品B"
  },
  {
    "time": "9/18",
    "price": 45,
    "name": "商品A"
  },
  {
    "time": "9/18",
    "price": 36,
    "name": "商品B"
  },
  {
    "time": "9/19",
    "price": 50,
    "name": "商品A"
  },
  {
    "time": "9/19",
    "price": 30,
    "name": "商品B"
  },
  {
    "time": "9/20",
    "price": 51,
    "name": "商品A"
  },
  {
    "time": "9/20",
    "price": 29,
    "name": "商品B"
  },
  {
    "time": "9/21",
    "price": 65,
    "name": "商品A"
  },
  {
    "time": "9/21",
    "price": 28,
    "name": "商品B"
  },
  {
    "time": "9/22",
    "price": 60,
    "name": "商品A"
  },
  {
    "time": "9/22",
    "price": 25,
    "name": "商品B"
  },
  {
    "time": "9/23",
    "price": 62,
    "name": "商品A"
  },
  {
    "time": "9/23",
    "price": 28,
    "name": "商品B"
  },
  {
    "time": "9/24",
    "price": 65,
    "name": "商品A"
  },
  {
    "time": "9/24",
    "price": 29,
    "name": "商品B"
  },
  {
    "time": "9/25",
    "price": 45,
    "name": "商品A"
  },
  {
    "time": "9/25",
    "price": 30,
    "name": "商品B"
  },
  {
    "time": "9/26",
    "price": 55,
    "name": "商品A"
  },
  {
    "time": "9/26",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/27",
    "price": 59,
    "name": "商品A"
  },
  {
    "time": "9/27",
    "price": 32,
    "name": "商品B"
  },
  {
    "time": "9/28",
    "price": 52,
    "name": "商品A"
  },
  {
    "time": "9/28",
    "price": 33,
    "name": "商品B"
  },
  {
    "time": "9/29",
    "price": 53,
    "name": "商品A"
  },
  {
    "time": "9/29",
    "price": 34,
    "name": "商品B"
  },
  {
    "time": "9/30",
    "price": 40,
    "name": "商品A"
  },
  {
    "time": "9/30",
    "price": 30,
    "name": "商品B"
  },
  {
    "time": "9/31",
    "price": 45,
    "name": "商品A"
  },
  {
    "time": "9/31",
    "price": 35,
    "name": "商品B"
  }
]

class LineItem extends Component{
  constructor(props){
    super(props);
    this.state =  {
      data: linedata.slice(0, linedata.length / 2 - 1),
      width: this.props.parentWidth,
      height: this.props.parentHeight,
      plotCfg: {
        margin: [10, 80, 5, 70],
      },
    }
  }
  render(){
    return (
      <ChartLine
      data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          plotCfg={this.state.plotCfg}
          ref="myChart"
      />
    )};
}

export default LineItem;
