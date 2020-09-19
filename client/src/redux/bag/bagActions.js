import { ADD_ITEM, TOGGLE_BAG_HIDDEN } from './bagActionTypes';

export const toggleBagHidden = () => ({
  type: TOGGLE_BAG_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
