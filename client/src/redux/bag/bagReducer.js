import {
  ADD_ITEM,
  CLEAR_ITEM_FROM_BAG,
  REMOVE_ITEM,
  TOGGLE_BAG_HIDDEN,
  CLEAR_BAG
} from './bagActionTypes';
import { addItemToBag, removeItemFromBag } from './bagUtils';

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

    case REMOVE_ITEM:
      return {
        ...state,
        bagItems: removeItemFromBag(state.bagItems, action.payload),
      };

    case CLEAR_ITEM_FROM_BAG:
      return {
        ...state,
        bagItems: state.bagItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

      case CLEAR_BAG:
        return {
          ...state, bagItems:[]
        }

    default:
      return state;
  }
};

export default bagReducer;
