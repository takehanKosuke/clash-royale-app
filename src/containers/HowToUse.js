import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import ContactForm from '../components/ContactForm'
import Grid from '@material-ui/core/Grid';


class HowToUse extends Component {
  render () {
    return(
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
        </Grid>
      </Grid>
    )
  }
}

export default HowToUse;
