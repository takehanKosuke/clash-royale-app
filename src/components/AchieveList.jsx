import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../css/AchieveList.css'

class AchieveList extends Component {
  // ここでlist作らないといけない気がする
  // achieveList={ [[ '勝利数',  this.state.user.wins ], [ '勝率', this.state.rate ] , [ '最多トロフィー', this.state.user.bestTrophies ], [ '最大勝利数', this.state.user.challengeMaxWins ]] }
  state = {
    achieveList: [[ '勝利数', 0 ], [ '勝率', 0 ] , [ '最多トロフィー', 0 ], [ '最大勝利数', 0 ]]
  }
  render() {
    return (
      <Grid container spacing={24}>
        { this.state.achieveList.map((text, index) => (
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
export default AchieveList;
