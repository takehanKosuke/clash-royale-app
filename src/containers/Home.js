import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render () {
    return(
      <Grid container spacing={24}>
        <Sidebar />
        <Header />
      </Grid>
    )
  }
}

export default App;
