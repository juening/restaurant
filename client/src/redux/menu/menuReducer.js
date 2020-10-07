import {
  FETCH_MENU_FAILURE,
  FETCH_MENU_START,
  FETCH_MENU_SUCCESS,
} from './menuActionTypes';

const INITIAL_STATE = {
  menuGroups: null,
  isFetching: false,
  errorMessage: null,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MENU_SUCCESS:
      return {
        ...state,
        menuGroups: action.payload,
        isFetching: false,
        errorMessage: null,
      };

    case FETCH_MENU_START:
      return { ...state, isFetching: true, errorMessage: null };

    case FETCH_MENU_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };

    default:
      return state;
  }
};

export default menuReducer;
