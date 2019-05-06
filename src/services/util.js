import axios from 'axios'

// access_key = settings.ACCESS_KEY
// target_api = URL+"/players/"
// playerTag = "%2328UGR809L"
//
// const clashApi = axios.create({
//     baseURL: "https://api.clashroyale.com/v1",
//     headers: {
//       "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI2ZDcyMjJiLTgyMzctNDA0YS04Y2IyLTAyYWQ2NWNmY2M0OSIsImlhdCI6MTU1NzAyMjM1MSwic3ViIjoiZGV2ZWxvcGVyLzg3MTdhY2JiLTVkNmQtNWExNS0wZjc0LWY1OTM3OTRjODg5YiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMTEuMjM5LjE4Mi4xMTQiXSwidHlwZSI6ImNsaWVudCJ9XX0.8xOzh1ISPTz272MLJT5N-AHx4TFp6ysM5sPcqSifTG_qqO8vweR_BVul3VfYjtvbH0joKgrY-klocT2Ucd6lxg"
//     },
//     responseType: 'json'
//   });
//
// const searchUser = (userName, callback) => {
//   return clashApi
//     .get("https://api.clashroyale.com/v1/players/%23LLG8QJUR"){
//       params: {}
//       .then((results) => {
//           // 通信に成功してレスポンスが返ってきた時に実行したい処理
//       }
//       .catch((error) => {
//           // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
//       }
//     }
// }

const clashApiBase = require('axios');
const clashApi = clashApiBase.create({
  baseURL: 'https://api.clashroyale.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

clachApi.get('/players/%23LLG8QJUR')
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log('通信に失敗しました')
  });

//
// axios
//     .get("https://api.clashroyale.com/v1/players/%23LLG8QJUR", { params: {authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI2ZDcyMjJiLTgyMzctNDA0YS04Y2IyLTAyYWQ2NWNmY2M0OSIsImlhdCI6MTU1NzAyMjM1MSwic3ViIjoiZGV2ZWxvcGVyLzg3MTdhY2JiLTVkNmQtNWExNS0wZjc0LWY1OTM3OTRjODg5YiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMTEuMjM5LjE4Mi4xMTQiXSwidHlwZSI6ImNsaWVudCJ9XX0.8xOzh1ISPTz272MLJT5N-AHx4TFp6ysM5sPcqSifTG_qqO8vweR_BVul3VfYjtvbH0joKgrY-klocT2Ucd6lxg"}　})
//     .then((results) => {
//         // 通信に成功してレスポンスが返ってきた時に実行したい処理
//         const data = results.data
//         console.log(data)
//     }
//     .catch((error) => {
//         // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
//         console.log('通信に失敗しました。');
//     }
