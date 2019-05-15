import React, { Component } from 'react';
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import AchieveList from '../components/AchieveList'
import UserTable from '../components/UserTable'
import Grid from '@material-ui/core/Grid';
// import { showUser } from '../services/users'
import { baseApi } from '../services/util'

import { searchUser } from '../actions/user'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    this.props.searchUser()
  }

  render () {
    const user = this.props.user
    const rate = `${Math.round(user.wins/user.battleCount*100)}%`
    const drow = user.battleCount - user.wins - user.losses
    return(
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Header />
          <AchieveList achieveList={ [[ '勝利数',  user.wins ], [ '勝率', rate ] , [ '最多トロフィー', user.bestTrophies ], [ '最大勝利数', user.challengeMaxWins ]] } />
          <UserTable user={ user } rate={ rate } drow={ drow } />
        </Grid>
      </Grid>
    )
  }
}

// mapStateToProps stateの情報からcomponentの必要なものをpropsとしてレンダリングさせる
const mapStateToProps = state => ({ user: state.user })

// mapDispatchToProps あるアクションが発生した時にreducerにタイプをなげてstateの変更をさせるためのやつ
const mapDispatchToProps = ({ searchUser })

// stateとactionをひもづける
export default connect(mapStateToProps, mapDispatchToProps)(Home)
