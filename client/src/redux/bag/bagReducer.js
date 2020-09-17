import { TOGGLE_BAG_HIDDEN } from './bagActionTypes';

const INITIAL_STATE = {
  hidden: true,
};

const bagReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_BAG_HIDDEN:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};

export default bagReducer;
