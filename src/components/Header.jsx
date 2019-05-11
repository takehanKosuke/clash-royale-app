import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import '../css/Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "" }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      id: event.target.value
    })
  }

  handleSubmit(){
    this.props.saerchUser(this.state.id)
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
      >
        <h1>UserName:{ this.props.user }</h1>
        <h1>
          <form onSubmit={this.handleSubmit}>
            <FormControl>
              <InputLabel htmlFor="custom-css-standard-input">TagID</InputLabel>
              <Input id="custom-css-standard-input" value={ this.state.id } onChange={ this.handleChange }/>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">Searh</Button>
          </form>
        </h1>
      </Grid>
    )
  }
}
export default Header;
