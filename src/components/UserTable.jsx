import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

import '../css/UserTable.css'

class UserTable extends Component {
  render() {
    console.log(this.props)
    const user = this.props.user
    var clan = this.props.user.clan ? this.props.user.clan : ""
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>内容</TableCell>
            <TableCell>スコア</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">タワーレベル</TableCell>
            <TableCell>{user.expLevel}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">トロフィー数</TableCell>
            <TableCell>{user.trophies}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">対戦数</TableCell>
            <TableCell>{user.battleCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">勝利数</TableCell>
            <TableCell>{user.wins}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">敗北数</TableCell>
            <TableCell>{user.losses}</TableCell>
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
            <TableCell>{user.threeCrownWins}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">クラン名</TableCell>
            <TableCell>{clan.name}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
export default UserTable;
