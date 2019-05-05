import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../css/AchieveList.css'

class AchieveList extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        { this.props.achieveList.map((text, index) => (
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
