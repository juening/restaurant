import {
  FETCH_MENU_FAILURE,
  FETCH_MENU_START,
  FETCH_MENU_SUCCESS,
} from './menuActionTypes';

import { firestore, convertCollectionToMap } from '../../firebase/firebase';

export const fetchMenuAsync = () => (dispatch) => {
  dispatch(fetchMenuStart());
  const menuCategoriesRef = firestore.collection('categories');
  menuCategoriesRef
    .get()
    .then((categoriesSnapshot) => {
      const categoriesMap = convertCollectionToMap(categoriesSnapshot);
      dispatch(fetchMenuSuccess(categoriesMap));
    })
    .catch((err) => dispatch(fetchMenuFailure(err.message)));
};

export const fetchMenuStart = () => ({
  type: FETCH_MENU_START,
});

export const fetchMenuSuccess = (menuGroups) => ({
  type: FETCH_MENU_SUCCESS,
  payload: menuGroups,
});

export const fetchMenuFailure = (errorMessage) => ({
  type: FETCH_MENU_FAILURE,
  payload: errorMessage,
});
