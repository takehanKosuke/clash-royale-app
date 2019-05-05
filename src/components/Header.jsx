import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import '../css/Header.css'

import axios from 'axios'
//
// const pixivApi = axios.create({
//     baseURL: "https://api.clashroyale.com/v1",
//     headers: {
//       "content-type": "application/json; charset=utf-8",
//       "cache-control": "max-age=60",
//       "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFjYzAyMDE2LTIzMTctNGViMC1iYTllLWJjZDZlN2QwMTA2NSIsImlhdCI6MTU1NzA1MzkzMCwic3ViIjoiZGV2ZWxvcGVyLzg3MTdhY2JiLTVkNmQtNWExNS0wZjc0LWY1OTM3OTRjODg5YiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODAuMTQ5LjE4OC41NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Y4zF1exsvZ4kz-uJ5vdQt5vg-RXdq8tRxJojxfVn5Ehf0D5p2u1dwNA8Z5MPISskQcp8eKF-jfIoyOiSSm7fxg"
//     },
//     data: {}
//   });
//
// const test = () => {
//     return pixivApi
//       .get("players/%23LLG8QJUR")
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
// }

// curl 'https://api.clashroyale.com/v1/players/%23LLG8QJUR' -X OPTIONS -H 'Access-Control-Request-Method: GET' -H 'Origin: http://localhost:3000' -H 'Referer: http://localhost:3000/' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36' -H 'Access-Control-Request-Headers: content-type,header' --compressed

// const header = {
//   'content-type': 'application/json; charset=utf-8',
//   'cache-control': 'max-age=60',
//   'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI2ZDcyMjJiLTgyMzctNDA0YS04Y2IyLTAyYWQ2NWNmY2M0OSIsImlhdCI6MTU1NzAyMjM1MSwic3ViIjoiZGV2ZWxvcGVyLzg3MTdhY2JiLTVkNmQtNWExNS0wZjc0LWY1OTM3OTRjODg5YiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMTEuMjM5LjE4Mi4xMTQiXSwidHlwZSI6ImNsaWVudCJ9XX0.8xOzh1ISPTz272MLJT5N-AHx4TFp6ysM5sPcqSifTG_qqO8vweR_BVul3VfYjtvbH0joKgrY-klocT2Ucd6lxg'
// }


class Header extends Component {
  test() {
    axios.get("https://api.clashroyale.com/v1/players/%23LLG8QJUR", {
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'cache-control': 'max-age=60',
            'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI2ZDcyMjJiLTgyMzctNDA0YS04Y2IyLTAyYWQ2NWNmY2M0OSIsImlhdCI6MTU1NzAyMjM1MSwic3ViIjoiZGV2ZWxvcGVyLzg3MTdhY2JiLTVkNmQtNWExNS0wZjc0LWY1OTM3OTRjODg5YiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMTEuMjM5LjE4Mi4xMTQiXSwidHlwZSI6ImNsaWVudCJ9XX0.8xOzh1ISPTz272MLJT5N-AHx4TFp6ysM5sPcqSifTG_qqO8vweR_BVul3VfYjtvbH0joKgrY-klocT2Ucd6lxg'
          },
          data: {},
    })
    .then((results) => {
        // 通信に成功してレスポンスが返ってきた時に実行したい処理
        console.log(results)
    },)
    .catch((error) => {
        // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
        console.log(error);
    })


      // curl -X GET --header 'Accept: application/json' --header "authorization: Bearer <API token>" 'https://api.clashroyale.com/v1/players/%23LLG8QJUR'
        //
        //
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
