import React from 'react';

import { ThemeProvider, createTheme, Arwes, Heading, Button, Line } from '@arwes/arwes';
import GraphItem from './GraphItem'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <div style={{ margin: 20 }}>
          <Heading node='h5'>Bot V1.0</Heading>
          <div style={{ padding: '5px' }}>
            <Button animate disabled>FuncA</Button>
            {' '}
            <Button animate>FuncB</Button>
            {' '}
            <Button animate layer='success'>
              <i className='mdi mdi-chemical-weapon' /> FuncC
            </Button>
            {' '}
            <Button animate layer='alert'>
              FuncD <i className='mdi mdi-robot' />
            </Button>
          </div>
          <div>
            <GraphItem ></GraphItem>
            <Line animate />
            <p>Processing...</p>
            <Line animate layer='success' />
            <p>1.Eating...</p>
            <p>2.Walking...</p>
            <p>3.Charging...</p>
            <p>4.Sleeping...</p>
            <Line animate layer='alert' />
          </div>
        </div>
      </Arwes>
    </ThemeProvider>
  );
}
export default App;
