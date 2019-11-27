import {combineReducers} from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: ['Allie', 'Gator', 'Lizzie', 'Reptar'],
};

const channelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  channels: channelReducer,
});
