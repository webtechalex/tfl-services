import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Typography variant='h2'>TfL Services</Typography>
        </header>
      </div>
    );
  }
}

export default App;
