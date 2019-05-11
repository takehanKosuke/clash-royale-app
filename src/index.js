import React from 'react';
import ReactDOM from 'react-dom';

// storeを作成する為のcompornent
import { createStore } from 'redux'

// ミドルウェアを許容するやつ
import { applyMiddleware } from 'redux'

// 作成したストアを全てのコンポーネントか渡す為のもの
import { Provider } from 'react-redux'

// reducerでオブジェクトの代りに関数を返す為のメソッド（ミドルウェアだよ）
import thunk from 'redux-thunk'
import './index.css';

import reducer from './reducers'

// routeingのimport
import Home from './containers/Home';
import Contact from './containers/Contact';
import HowToUse from './containers/HowToUse';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// アプリケーション唯一のstoreを作成
// applyMiddleware(thunk)とする事でいい感じに使えるようになる
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  // providerを使う事で作成したストアを全てのコンポーネントから参照できる
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/how_to_use" component={ HowToUse } />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
