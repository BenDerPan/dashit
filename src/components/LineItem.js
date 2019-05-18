import React, { Component } from "react";
import createG2 from 'g2-react';

const ChartLine = createG2(chart => {
  chart.line().position('time*price').color('name').shape('spline').size(2);
  chart.render();
});

class LineItem extends Component{
  render(){
    return (
      <ChartLine
      data={this.props.viewData.data}
          width={this.props.parentWidth}
          height={this.props.parentHeight}
          plotCfg={this.props.viewData.plotCfg}
          ref="myLineChart"
      />
    )};
}

export default LineItem;
