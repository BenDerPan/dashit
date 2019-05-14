import React, { Component } from 'react';

import { ThemeProvider, createTheme, Arwes, Heading, Button, Line, Row, Col, Project, Frame } from '@arwes/arwes';
import GraphItem from './GraphItem'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    }
  }

  render() {
    return (
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <div style={{ margin: 20 }}>
            <Heading node='h5'>AI Bot Dashboard V1.0</Heading>
            <div>
              <Row >
                <Col s={12} m={6} l={4} xl={3} >
                  <Frame show={true} animate={true} level={3} corners={4} layer='primary'>
                    <div style={{padding:10}}>任务入库曲线图</div>
                    <Line></Line>
                    <div style={{height:300}}>
                    
                    </div>
                  </Frame>
                </Col>
                <Col s={12} m={6} l={4} xl={3}>
                  <Project animate header="柱状突">
                    fdsfdsf
                  </Project>
                </Col>
                <Col s={12} m={6} l={4} xl={3}>
                  <Project animate header="关系图" >
                    <div>法第三</div>
                  </Project>
                </Col>
                <Col s={12} m={6} l={4} xl={3}>
                  <Project animate header="曲线图" >
                    <div ref="parentContainer" style={{ height: 350 }}>
                      <GraphItem parentWidth={this.state.width} parentHeight={this.state.height}></GraphItem>
                    </div>
                  </Project>
                </Col>
              </Row>

            </div>
          </div>
        </Arwes>
      </ThemeProvider>
    );
  }

  componentDidMount() {
    console.log(this.refs.parentContainer.clientWidth, this.refs.parentContainer.clientHeight);
    this.setState({
      width: this.refs.parentContainer.clientWidth,
      height: this.refs.parentContainer.clientHeight
    });


  }
}
export default App;
