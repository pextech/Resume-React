import { combineReducers } from 'redux';
import inputs from './inputs';
import notes from './notes';

export default combineReducers({
  notes,
  inputs,
});
