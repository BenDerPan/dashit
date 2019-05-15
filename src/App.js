import React from 'react';
import { ThemeProvider, createTheme, Arwes, Heading, Button, Line, Row, Col, Project, Frame } from '@arwes/arwes';
import AddRemoveLayout from './AddRemoveLayout'
import './App.css';


function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <div style={{ margin: 20 }}>
          <Heading node='h5'>AI Bot Dashboard V1.0</Heading>
          <div>
            <AddRemoveLayout ></AddRemoveLayout>
          </div>
        </div>
      </Arwes>
    </ThemeProvider>
  );
}
export default App;
