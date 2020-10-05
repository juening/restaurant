import { createSelector } from 'reselect';

const selectMenu = (state) => state.menu;

export const selectMenuGroups = createSelector(
  [selectMenu],
  (selectMenu) => selectMenu.menuGroups
);

export const selectCategoriesForOverview = createSelector(
  [selectMenuGroups],
  (categories) =>
    categories ? Object.keys(categories).map((key) => categories[key]) : null
);

export const selectCategory = (categoryUrlParam) =>
  createSelector([selectMenuGroups], (categories) =>
    categories ? categories[categoryUrlParam] : null
  );
