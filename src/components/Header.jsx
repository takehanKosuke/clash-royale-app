import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import '../css/Header.css'

import { bindActionCreators } from 'redux';
import { showUser } from '../actions/user'

class Header extends Component {
  componentDidMount() {
    this.props.showUser()
  }
  state = {
    userId: ''
  }

  handleChange = event => {
    this.setState({ userId: event.target.value });
  };

  render() {
    // console.log(this.props)
    const state = this.state
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
      >
        <h1>UserName:{ this.props.user.user ? this.props.user.user.name : "" }</h1>
        <h1>
          <form>
            <FormControl>
              <InputLabel htmlFor="custom-css-standard-input">TagID</InputLabel>
              <Input id="custom-css-standard-input" value={ state.userId } onChange={ this.handleChange } />
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => this.props.showUser(state.userId)} >Searh</Button>
          </form>
        </h1>
      </Grid>
    )
  }
}

// mapStateToProps stateの情報からcomponentの必要なものをpropsとしてレンダリングさせる
const mapStateToProps = (state, ownProps) => ({ user: state.user })

// mapDispatchToProps あるアクションが発生した時にreducerにタイプをなげてstateの変更をさせるためのやつ
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ showUser }, dispatch)
}

// stateとactionをひもづける
export default connect(mapStateToProps, mapDispatchToProps)(Header)
