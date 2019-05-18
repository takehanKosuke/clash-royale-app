// 全部のreducerを結合する
import { combineReducers } from 'redux'
import user from './user'
import searchId from './searchId'

export default combineReducers({ user, searchId })
