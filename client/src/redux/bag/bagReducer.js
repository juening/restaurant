import { ADD_ITEM, TOGGLE_BAG_HIDDEN } from './bagActionTypes';
import { addItemToBag } from './bagUtils';

const INITIAL_STATE = {
  hidden: true,
  bagItems: [],
};

const bagReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_BAG_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case ADD_ITEM:
      return {
        ...state,
        bagItems: addItemToBag(state.bagItems, action.payload),
      };

    default:
      return state;
  }
};

export default bagReducer;
