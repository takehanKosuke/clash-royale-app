import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import AchieveList from '../components/AchieveList'
import UserTable from '../components/UserTable'
import Grid from '@material-ui/core/Grid';
// import { showUser } from '../services/users'
// import { baseApi } from '../services/util'

// import { showUser } from '../actions/user'

class Home extends Component {
  render () {
    return(
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Header />
          <AchieveList />
          <UserTable />
        </Grid>
      </Grid>
    )
  }
}

// mapStateToProps stateの情報からcomponentの必要なものをpropsとしてレンダリングさせる
// const mapStateToProps = (state, ownProps) => ({ user: state.showUser })
//
// // mapDispatchToProps あるアクションが発生した時にreducerにタイプをなげてstateの変更をさせるためのやつ
// const mapDispatchToProps = ({ showUser })
//
// // stateとactionをひもづける
// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home
