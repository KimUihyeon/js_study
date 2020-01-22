import { combineReducers } from 'redux'
import Counter from "./Counter";
import Ui from './Ui';

let reducers = combineReducers({Counter, Ui})

export default reducers;