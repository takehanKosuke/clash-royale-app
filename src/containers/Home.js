import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import AchieveList from '../components/AchieveList'
import UserTable from '../components/UserTable'
import Grid from '@material-ui/core/Grid';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = { user: "" };
  }
  render () {
    const user = this.state.user
    return(
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Header />
          <AchieveList achieveList={ [[ '勝利数',  user.wins ], [ '勝率', user.winsRate ] , [ '最多トロフィー', user.bestTrophies ], [ '最大勝利数', user.maxWins ]] } />
          <UserTable />
        </Grid>
      </Grid>
    )
  }
}

export default Home;
