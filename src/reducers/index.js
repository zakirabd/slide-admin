import { combineReducers } from 'redux';
import MainReducers from './MainReducers';

export default combineReducers({
  Data: MainReducers
}); 