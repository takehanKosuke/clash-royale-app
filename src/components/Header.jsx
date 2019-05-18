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
import { handleChange } from '../actions/searchId'

class Header extends Component {
  componentDidMount() {
    this.props.showUser()
  }

  handleChange = event => {
    this.props.handleChange(event.target.value)
  };

  render() {
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
              <Input id="custom-css-standard-input" value={ this.props.searchId } onChange={ this.handleChange } />
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => this.props.showUser(this.props.searchId)} >Searh</Button>
          </form>
        </h1>
      </Grid>
    )
  }
}

// mapStateToProps stateの情報からcomponentの必要なものをpropsとしてレンダリングさせる
const mapStateToProps = (state, ownProps) => ({ user: state.user, searchId: state.searchId.searchId })
// const mapStateToProps = (state, ownProps) => ({ searchId: state.searchId.searchId })

// mapDispatchToProps あるアクションが発生した時にreducerにタイプをなげてstateの変更をさせるためのやつ
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ showUser, handleChange }, dispatch)
  // return bindActionCreators({ handleChange }, dispatch)
}

// stateとactionをひもづける
export default connect(mapStateToProps, mapDispatchToProps)(Header)
