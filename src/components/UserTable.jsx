import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import '../css/UserTable.css'

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('タワーレベル', 13),
  createData('トロフィー数', 5000),
  createData('勝利数', 3000),
  createData('敗北数', 1500),
  createData('勝率', '50%'),
  createData('3クラウン', 500),
  createData('クラン名', 'ピーマンず'),
];

function UserTable() {

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>内容</TableCell>
          <TableCell>スコア</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">{row.name}</TableCell>
            <TableCell>{row.calories}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default UserTable;
