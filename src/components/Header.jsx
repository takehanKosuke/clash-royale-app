import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import '../css/Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    const user = this.props
    this.state = { user: "ayane" }
  }
  render() {
    return (
      <Grid
        item xs={10}
        container
        direction="row"
        justify="space-between"
      >
        <h1>UserName:{ this.state.user }</h1>
        <h1>
          <FormControl>
            <InputLabel htmlFor="custom-css-standard-input">TagID</InputLabel>
            <Input id="custom-css-standard-input"/>
          </FormControl>
          <Button variant="contained" color="primary">Searh</Button>
        </h1>
      </Grid>
    )
  }
}
export default Header;
