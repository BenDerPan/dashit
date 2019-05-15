import React, { Component } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

import { ThemeProvider, createTheme, Arwes, Heading, Button, Line, Row, Col, Project, Frame } from '@arwes/arwes';
import GraphItem from './GraphItem'
import './App.css';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ReactGridLayout = WidthProvider(RGL);

class App extends Component {
  static defaultProps = {
    className: "layout",
    onLayoutChange: () => { },
  };

  constructor(props) {
    super(props);
    
    this.generateLayout=this.generateLayout.bind(this);
    this.generateDOM=this.generateDOM.bind(this);
    const layout = this.generateLayout();
    this.state = {
      layout: layout,
      rowHeight:450,
      cols:4,
      width: 0,
      height: 0,
      items: [
        {
          title: "关系图1",
        },
        {
          title: "关系图2",
        },
        // {
        //   title: "关系图3",
        // },
        // {
        //   title: "关系图4",
        // },
        // {
        //   title: "关系图5",
        // },
        // {
        //   title: "关系图6",
        // },
        // {
        //   title: "关系图7",
        // },
        // {
        //   title: "关系图8",
        // },
  
      ],

    }

    
  }

  generateDOM() {
    return this.state.items.map((item, index) => {
      return (
        <Project key={item.title} animate header={item.title}>
          <div ref={item.title}>
            <GraphItem parentWidth={this.state.width} parentHeight={this.state.height}></GraphItem>
          </div>
        </Project>
      )})
  }

  generateLayout() {
    let itemCount=this.state.items.length;
    if(itemCount>=4){
      this.setState({
        cols:4,
        rowHeight:450,
      })
    }else{
      this.setState({
        cols:itemCount,
        rowHeight:450*2,
      })
    }
    return this.state.items.map((item,index)=>{
      return {
        x:index%4,
        y:index/4,
        w:1,
        h:1,
        i:item.title,
        isResizable:false
      }
    })
  }

  onLayoutChange(layout){
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <div style={{ margin: 20 }}>
            <Heading node='h5'>AI Bot Dashboard V1.0</Heading>
            <div>
              <ReactGridLayout layout={this.state.layout} onLayoutChange={this.onLayoutChange} rowHeight={this.state.rowHeight} cols={this.state.cols} {...this.props}>
                {this.generateDOM()}
              </ReactGridLayout>
            </div>
          </div>
        </Arwes>
      </ThemeProvider>
    );
  }

  componentDidMount() {
    const refID=this.props.items[0].title;
    console.log(this.refs[refID].clientWidth, this.refs[refID].clientHeight);
    this.setState({
      width: this.refs[refID].clientWidth,
      height: this.refs[refID].clientWidth * 0.7
    });


  }
}
export default App;
