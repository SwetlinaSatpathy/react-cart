import { combineReducers } from 'redux';
import monsterReducer from './monster/monster.reducer';

export default combineReducers({
    monster: monsterReducer
  });