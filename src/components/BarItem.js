import React, { Component } from "react";

import createG2 from 'g2-react';


const Bar=createG2(chart=>{
  chart.interval().position('year*sales');
  chart.render();
})
class BarItem extends Component{
  render(){
    return (
      <Bar
      data={this.props.viewData.data}
      width={this.props.parentWidth}
      height={this.props.parentHeight}
      plotCfg={this.props.viewData.plotCfg}
      />
    )};
}

export default BarItem;
