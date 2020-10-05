import { UPDATE_MENU } from './menuActionTypes';

const INITIAL_STATE = {
  menuGroups: null,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MENU:
      return {
        ...state,
        menuGroups: action.payload,
      };

    default:
      return state;
  }
};

export default menuReducer;
