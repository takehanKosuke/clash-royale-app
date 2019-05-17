import React, { Component } from 'react';
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import AchieveList from '../components/AchieveList'
import UserTable from '../components/UserTable'
import Grid from '@material-ui/core/Grid';
// import { showUser } from '../services/users'
// import { baseApi } from '../services/util'

import { showUser } from '../actions/user'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    this.props.showUser()
  }

  render () {
    console.log(this.state)
    return(
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Header />
          <AchieveList achieveList={ [[ '勝利数',  this.state.user.wins ], [ '勝率', this.state.rate ] , [ '最多トロフィー', this.state.user.bestTrophies ], [ '最大勝利数', this.state.user.challengeMaxWins ]] } />
          <UserTable />
        </Grid>
      </Grid>
    )
  }
}

// mapStateToProps stateの情報からcomponentの必要なものをpropsとしてレンダリングさせる
const mapStateToProps = state => ({ user: state.user })

// mapDispatchToProps あるアクションが発生した時にreducerにタイプをなげてstateの変更をさせるためのやつ
const mapDispatchToProps = ({ showUser })

// stateとactionをひもづける
export default connect(mapStateToProps, mapDispatchToProps)(Home)
