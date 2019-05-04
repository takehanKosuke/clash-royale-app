import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import AchieveList from '../components/AchieveList'
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render () {
    return(
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Header userName={ "kosuke" }/>
          <AchieveList achieveList={ [[ '勝利数', '500' ], [ '勝率', '30%' ] , [ '最多トロフィー', '5400' ], [ '最大勝利数', '13' ]] } />
        </Grid>
      </Grid>
    )
  }
}

export default App;
