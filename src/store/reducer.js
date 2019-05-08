import * as actionTypes from './actionTypes';

const defaultStore = {
  isClicked: false
};

const reducer = (state = defaultStore, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case actionTypes.ON_CLICK:
      newState.isClicked = true;
      return newState;
    case actionTypes.RESET_CLICK:
      newState.isClicked = false;
      return newState;
    default: return state;
  }
};

export default reducer;