import { combineReducers } from 'redux';

import start from './start';
import gameStage from './gameStage';

export default combineReducers({
    start,
    gameStage,
});