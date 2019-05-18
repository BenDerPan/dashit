import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider, createTheme, Arwes, Heading } from '@arwes/arwes';
import HelpPage from './HelpPage'
import NotFoundPage from './NotFoundPage'
import AddRemoveLayout from './AddRemoveLayout'
import './App.css';


function App() {
  return (

    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <BrowserRouter>
          <div style={{ margin: 15 }}>
            <Switch>
              <Route path="/" exact component={HelpPage}></Route>
              <Route path="/:index" exact component={AddRemoveLayout}></Route>
              
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </Arwes>
    </ThemeProvider>

  );
}
export default App;
