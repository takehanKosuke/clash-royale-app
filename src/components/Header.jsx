import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import '../css/Header.css'

import axios from 'axios'
class Header extends Component {
  test() {
    axios.get("http://localhost:30001/api/v1/users", {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      responseType: 'json'
    })
    .then((results) => {
        // 通信に成功してレスポンスが返ってきた時に実行したい処理
        console.log(results)
    },)
    .catch((error) => {
        // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
        console.log(error);
    })
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
      >
        <h1>UserName:{ this.props.userName }</h1>
        <h1>
          <FormControl>
            <InputLabel htmlFor="custom-css-standard-input">TagID</InputLabel>
            <Input id="custom-css-standard-input"/>
          </FormControl>
          <Button variant="contained" color="primary">Searh</Button>
        </h1>
        <Button variant="contained" color="primary" onClick={() => this.test()}>Test</Button>
      </Grid>
    )
  }
}
export default Header;
