import React from 'react';
import Main from './MyComponents/MainComponent';
import {BrowserRouter} from 'react-router-dom';
class App extends React.Component{


  render()
  {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </React.Fragment>
    );
  };
}


export default App;
