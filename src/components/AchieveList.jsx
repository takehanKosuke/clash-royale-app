import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../css/AchieveList.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { showUser } from '../actions/user'
import { handleChange } from '../actions/searchId'

class AchieveList extends Component {
  componentDidMount() {
    this.props.showUser()
  }
  render() {
    const props = this.props.user
    let achieveList = props.user ? [[ '勝利数', props.user.wins], [ '勝率', `${props.rate}%` ] , [ '最多トロフィー', props.user.bestTrophies ], [ '最大勝利数', props.user.challengeMaxWins ]] : []
    return (
      <Grid container spacing={24}>
        { achieveList.map((text, index) => (
          <Grid item xs={3}>
            <Card className={`card-${ index }` }>
              <CardContent className="card-content">
                <Typography color="textSecondary" gutterBottom>{ text[0] }</Typography>
                <Typography variant="h5" component="h2">{ text[1] }</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
  }
}

// mapStateToProps stateの情報からcomponentの必要なものをpropsとしてレンダリングさせる
const mapStateToProps = (state, ownProps) => ({ user: state.user, searchId: state.searchId.searchId })

// mapDispatchToProps あるアクションが発生した時にreducerにタイプをなげてstateの変更をさせるためのやつ
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ showUser, handleChange }, dispatch)
}

// stateとactionをひもづける
export default connect(mapStateToProps, mapDispatchToProps)(AchieveList)
