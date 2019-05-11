import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import AchieveList from '../components/AchieveList'
import UserTable from '../components/UserTable'
import Grid from '@material-ui/core/Grid';
// import { showUser } from '../services/users'
import { baseApi } from '../services/util'


class Home extends Component {
  constructor(props){
    super(props);
    this.state = { user: "" };
  }

  saerchUser(id){
    return baseApi.get.get(`/users?${id}`, {})
      .then((res) => {
        this.setState({
          user: res.user
        })
        console.log("呼ばれてるよっ")
      })
      .catch((error) => {
          console.log(error);
      })
  }

  render () {
    const user = this.state.user
    return(
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Header saerchUser={(id) => this.saerchUser(id)} user={ this.user } />
          <AchieveList achieveList={ [[ '勝利数',  user.wins ], [ '勝率', user.winsRate ] , [ '最多トロフィー', user.bestTrophies ], [ '最大勝利数', user.maxWins ]] } />
          <UserTable />
        </Grid>
      </Grid>
    )
  }
}

export default Home;
