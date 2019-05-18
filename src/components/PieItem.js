import React, { Component } from "react";
import createG2 from 'g2-react';
import { Stat } from 'g2';

const ChartPie = createG2(chart => {
  chart.coord('theta');
  chart.intervalStack().position(Stat.summary.proportion()).color('cut');
  chart.render();
});

class PieItem extends Component{
  render(){
    return (
      <ChartPie
      data={this.props.viewData.data}
          width={this.props.parentWidth}
          height={this.props.parentHeight}
          plotCfg={this.props.viewData.plotCfg}
          ref="myChart"
      />
    )};
}

export default PieItem;
