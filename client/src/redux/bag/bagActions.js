import {
  ADD_ITEM,
  CLEAR_BAG,
  CLEAR_ITEM_FROM_BAG,
  REMOVE_ITEM,
  TOGGLE_BAG_HIDDEN,
} from './bagActionTypes';

export const toggleBagHidden = () => ({
  type: TOGGLE_BAG_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: CLEAR_ITEM_FROM_BAG,
  payload: item,
});

export const clearBag = () => ({
  type:CLEAR_BAG
})