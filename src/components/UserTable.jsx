import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import {Link} from 'react-router-dom';

import '../css/UserTable.css'

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {showUser} from '../actions/user'
import { handleChange } from '../actions/searchId'

class UserTable extends Component {
  componentDidMount() {
    this.props.showUser()
  }
  render() {
    const props = this.props.user
    if (props.user) {
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
            <TableCell>{props.user.expLevel}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">トロフィー数</TableCell>
            <TableCell>{props.user.trophies}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">対戦数</TableCell>
            <TableCell>{props.user.battleCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">勝利数</TableCell>
            <TableCell>{props.user.wins}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">敗北数</TableCell>
            <TableCell>{props.user.losses}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">引き分け数</TableCell>
            <TableCell>{props.drow}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">勝率</TableCell>
            <TableCell>{props.rate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">３クラウン</TableCell>
            <TableCell>{props.user.threeCrownWins}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">クラン名</TableCell>
            <TableCell>{props.clan.name}</TableCell>
          </TableRow>
        </TableBody>
      </Table>);
    } else {
      return (<div>User Not Found</div>)
    }
  }
}
// mapStateToProps stateの情報からcomponentの必要なものをpropsとしてレンダリングさせる
const mapStateToProps = (state, ownProps) => ({ user: state.user, searchId: state.searchId.searchId })

// mapDispatchToProps あるアクションが発生した時にreducerにタイプをなげてstateの変更をさせるためのやつ
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ showUser, handleChange }, dispatch)
}

// stateとactionをひもづける
export default connect(mapStateToProps, mapDispatchToProps)(UserTable)
