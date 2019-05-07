import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import { showUser } from '../services/users'
import '../css/Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "" }
    showUser( this.state.user , (res) => {
      this.setUser(res)
    })
  }

  setUser(res){
    this.setState({ user: res })
  }


  render() {
    const user = this.state.user
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
      >
        <h1>UserName:{ user.name }</h1>
        <h1>
          <FormControl>
            <InputLabel htmlFor="custom-css-standard-input">TagID</InputLabel>
            <Input id="custom-css-standard-input"/>
          </FormControl>
          <Button variant="contained" color="primary">Searh</Button>
        </h1>
        <Button variant="contained" color="primary" onClick={() => showUser("")}>Test</Button>
      </Grid>
    )
  }
}
export default Header;
