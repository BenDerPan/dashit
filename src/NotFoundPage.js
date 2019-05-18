import React, {Component} from 'react'
import { Heading, Button, Line, Frame, Words,Project, Puffs,Content, Loading } from '@arwes/arwes';
import './App.css'

class NotFoundPage extends Component{
  render(){
    return(
      <Puffs style={{ width: '100%', height: 750 }}>
      <div className="center-div">
      <Project header={<span><Loading small ></Loading> 404!!! Page Not Found...</span>} style={{marginTop:100}}>
        <Content>
        <blockquote data-layer='alert'>Page is on a vacation now...</blockquote>
        </Content>
      </Project>
      </div>
      </Puffs>
    );
  }
}

export default NotFoundPage;