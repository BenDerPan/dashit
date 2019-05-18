import React, {Component} from 'react'
import { Heading, Button, Line, Frame, Words,Project, Puffs,Content, Loading } from '@arwes/arwes';
import './App.css'

class HelpPage extends Component{
  render(){
    return(
      <Puffs style={{ width: '100%', height: 750 }}>
      <div className="center-div">
      <Project header={<span><Loading small ></Loading> Help Message</span>} style={{marginTop:100}}>
        <Content>
        <blockquote>当前访问页面需要指定页面参数index, 以便可以打开多页面进行不同内容的展示...</blockquote>
        <br/>
        <blockquote data-layer='success'>For Example:</blockquote>
        <blockquote data-layer='alert'><p><a href='http://localhost:3000/Monitor1'>http://localhost:3000/Monitor1</a></p></blockquote>
        </Content>
      </Project>
      </div>
      </Puffs>
    );
  }
}

export default HelpPage;