import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import '../css/Header.css'

import { searchUser } from '../actions/user'

class Header extends Component {
  // compornentがマウントされた時に実行される
  // componentDidMount() {
  //   this.props.searchUser()
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = { id: "" }
  //   this.handleSubmit = this.handleSubmit.bind(this)
  //   this.handleChange = this.handleChange.bind(this)
  // }
  // handleChange = (event) => {
  //   this.setState({
  //     id: event.target.value
  //   })
  // }
  // handleSubmit(){
  //   this.props.sarchUser(this.state.id)
  // }

  render() {
    const props = this.props
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
      >
        <h1>UserName:{ props.user.name }</h1>
        <h1>
          <form onSubmit={props.searchUser}>
            <FormControl>
              <InputLabel htmlFor="custom-css-standard-input">TagID</InputLabel>
              <Input id="custom-css-standard-input" onChange={ this.handleChange }/>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">Searh</Button>
          </form>
        </h1>
      </Grid>
    )
  }
}

// mapStateToProps stateの情報からcomponentの必要なものをpropsとしてレンダリングさせる
const mapStateToProps = state => ({ user: state.user })

// mapDispatchToProps あるアクションが発生した時にreducerにタイプをなげてstateの変更をさせるためのやつ
const mapDispatchToProps = ({ searchUser })

// stateとactionをひもづける
export default connect(mapStateToProps, mapDispatchToProps)(Header)
