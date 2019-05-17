import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Link} from 'react-router-dom';

import '../css/UserTable.css'

import {bindActionCreators} from 'redux';
import {showUser} from '../actions/user'

class UserTable extends Component {
  render() {
    if (this.user) {
      return (<Table>
        <TableHead>
          <TableRow>
            <TableCell>内容</TableCell>
            <TableCell>スコア</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">タワーレベル</TableCell>
            <TableCell>{this.user.expLevel}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">トロフィー数</TableCell>
            <TableCell>{this.user.trophies}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">対戦数</TableCell>
            <TableCell>{this.user.battleCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">勝利数</TableCell>
            <TableCell>{this.user.wins}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">敗北数</TableCell>
            <TableCell>{this.user.losses}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">引き分け数</TableCell>
            <TableCell>{this.props.drow}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">勝率</TableCell>
            <TableCell>{this.props.rate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">３クラウン</TableCell>
            <TableCell>{this.user.threeCrownWins}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">クラン名</TableCell>
            <TableCell>{this.state.clan.name}</TableCell>
          </TableRow>
        </TableBody>
      </Table>);
    } else {
      return (<div>User Not Found</div>)
    }
  }
}
const mapStateToProps = state => ({user: state.user})

export default UserTable;
