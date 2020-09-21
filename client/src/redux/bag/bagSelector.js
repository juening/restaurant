import { createSelector } from 'reselect';

const selectBag = (state) => state.bag;

export const selectBagItems = createSelector(
  [selectBag],
  (bag) => bag.bagItems
);

export const selectBagItemsCount = createSelector(
  [selectBagItems],
  (bagItems) => bagItems.reduce((acc, item) => acc + item.quantity, 0)
);
